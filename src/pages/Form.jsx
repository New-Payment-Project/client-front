import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthData, setRoute } from "../redux/slices/AuthSlice";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import constants from "../constants/constants";
import warningToastify from "../components/toastify/warningToastify";
import errorToastify from "../components/toastify/errorToastify";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { route } = useParams();

  const login = "development";
  const password = "LhNwNu2A0Rwq";

  const { phoneFormats, phonePlaceholders } = constants();

  const [formData, setFormData] = useState({
    fullName: "",
    tg: "",
    phonePrefix: "+998",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(setRoute(route));
  }, []);

  const englishLetterRegex = /^[a-zA-Z0-9\s@,.'`/_]*$/;

  const containsNumber = (str) => /\d/.test(str);
  const containsLetter = (str) => /[a-zA-Z]/.test(str);

  const validateForm = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber) {
      return warningToastify("Заполните данные для оплаты");
    }

    if (containsNumber(formData.fullName)) {
      return warningToastify("Имя не может содержать цифры");
    }

    if (!englishLetterRegex.test(formData.tg)) {
      return warningToastify(
        "Telegram username должен содержать только английские буквы"
      );
    }

    const phoneRegex = phoneFormats[formData.phonePrefix];
    const expectedLength = String(phoneRegex)
      .match(/\d/g)
      .reduce((total, current) => total + parseInt(current), 0);

    if (formData.phoneNumber.length !== expectedLength) {
      return warningToastify("Введите номер телефона в правильном формате");
    }

    if (containsLetter(formData.phoneNumber)) {
      return warningToastify("Телефонный номер не может содержать буквы");
    }

    await checkForDuplicateOrder();
  };

  const checkForDuplicateOrder = async () => {
    try {
      setLoading(true);

      const getAccessToken = await axios.post(
        `${process.env.REACT_APP_API_AUTH_URL}`,
        {
          login: login,
          password: password,
        }
      );
      const token = getAccessToken.data?.token;
      const authHeader = { headers: { Authorization: `Bearer ${token}` } };
      
      localStorage.setItem("token", token);

      const courseResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/courses`,
        authHeader
      );

      const filteredCourse = courseResponse.data.filter(
        (course) => course.route === route
      );

      if (filteredCourse.length === 0) {
        errorToastify("Курс с указанным путем не найден");
        return;
      }

      const courseId = filteredCourse[0]._id;

      const orderResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/orders`,
        authHeader
      );

      const existingOrder = orderResponse.data.data.find(
        (order) =>
          order?.course_id?._id === courseId &&
          order?.clientPhone ===
            `${formData.phonePrefix}${formData.phoneNumber}` &&
          order.status === "ВЫСТАВЛЕНО"
      );

      const invoiceResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/invoices`,
        authHeader
      );

      if (existingOrder) {
        const filteredInvoice = invoiceResponse.data.filter(
          (invoice) => invoice.invoiceNumber === existingOrder.invoiceNumber
        );
        dispatch(setAuthData(filteredInvoice[0]._id));
        navigate("/course-info");
      } else {
        await handleSubmit(courseId, filteredCourse[0], authHeader);
      }
    } catch (error) {
      errorToastify("Ошибка при проверке заказа");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (courseId, courseData, authHeader) => {
    try {
      setLoading(true);

      const tgUsername =
        formData?.tg.length === 0 ? "Kiritilmagan" : formData?.tg;

      const invoiceResponse = await axios.post(
        `${process.env.REACT_APP_API_URL}/invoices`,
        {
          clientName: formData.fullName,
          clientPhone: `${formData.phonePrefix}${formData.phoneNumber}`,
          tgUsername: tgUsername,
        },
        authHeader
      );

      if (!invoiceResponse.data || !invoiceResponse.data.invoiceNumber) {
        errorToastify("Ошибка создания счета. Пожалуйста, повторите попытку.");
        return;
      }

      const invoiceNumber = invoiceResponse.data.invoiceNumber;

      await axios.post(
        `${process.env.REACT_APP_API_URL}/orders/create`,
        {
          clientName: formData.fullName,
          clientPhone: `${formData.phonePrefix}${formData.phoneNumber}`,
          tgUsername: tgUsername,
          invoiceNumber: invoiceNumber,
          status: "ВЫСТАВЛЕНО",
          create_time: Date.now(),
          prefix: courseData.prefix,
          course_id: courseId,
          courseTitle: courseData.title,
          amount: courseData.price,
        },
        authHeader
      );

      dispatch(setAuthData(invoiceResponse.data._id));
      navigate("/course-info");
    } catch (error) {
      errorToastify("Возникла ошибка при выполнении");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tg" || name === "fullName") {
      if (!englishLetterRegex.test(value)) {
        warningToastify("Пожалуйста используйте только латинские буквы");
        return;
      }
    }

    if (name === "phonePrefix") {
      setFormData({ ...formData, phonePrefix: value, phoneNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, phoneNumber: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#bed6fd] to-[#60a5fa] text-white p-6 text-center rounded-t-xl">
          <h2 className="text-xl lg:text-2xl font-bold">Форма регистрации</h2>
        </div>

        <form onSubmit={validateForm} className="space-y-6 p-8 bg-gray-50">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 flex"
            >
              ФИО<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg"
              placeholder="Введите ФИО"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tg" className="text-sm font-medium text-gray-700">
              Телеграм
            </label>
            <input
              id="tg"
              name="tg"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg"
              placeholder="Куда отправить чек и онлайн билет?"
              value={formData.tg}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phonePrefix"
                className="text-sm font-medium text-gray-700 flex"
              >
                Код страны
              </label>
              <select
                id="phonePrefix"
                name="phonePrefix"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg"
                value={formData.phonePrefix}
                onChange={handleChange}
              >
                {Object.keys(phoneFormats).map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700 flex"
              >
                Номер телефона<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={String(phoneFormats[formData.phonePrefix])
                  .match(/\d/g)
                  .reduce((total, current) => total + parseInt(current), 0)}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg"
                placeholder={phonePlaceholders[formData.phonePrefix].replace(
                  /\s+/g,
                  ""
                )}
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="font-bold text-gray-500 flex flex-col md:flex-row items-start md:items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="flex-1 text-[10px]">
                Я соглашаюсь на обработку моих персональных данных, соглашаюсь
                на получение рассылок от NORBEKOV GROUP и принимаю{" "}
                <Link
                  to="/oferta"
                  className="link link-primary text-gray-500 underline"
                >
                  условиями предоставления услуг
                </Link>
                .
              </span>
            </p>
          </div>

          <button
            type="submit"
            disabled={!isChecked || loading}
            className={`w-full bg-[#60a5fa] hover:bg-[#488eff] text-white text-sm py-3 rounded-lg ${
              !isChecked && "cursor-not-allowed opacity-50"
            }`}
          >
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Отправить"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

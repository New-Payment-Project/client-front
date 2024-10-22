import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { route } = useParams();

  const { phoneFormats, phonePlaceholders } = constants();

  const [formData, setFormData] = useState({
    fullName: "",
    location: "Kiritilmagan",
    passportLetters: "",
    passportNumbers: "Kiritilmagan",
    tg: "",
    phonePrefix: "+998",
    phoneNumber: "",
  });

  const englishLetterRegex = /^[a-zA-Z0-9\s@,.'`/_]*$/;

  const containsNumber = (str) => {
    const regex = /\d/;
    return regex.test(str);
  };

  const containsLetter = (str) => {
    const regex = /[a-zA-Z]/;
    return regex.test(str);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber) {
      return warningToastify("Заполните данные для оплаты");
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

    if (containsNumber(formData.fullName)) {
      return warningToastify("Имя не может содержать цифры");
    }

    return handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const passport = `${formData.passportLetters.toUpperCase()}${
        formData.passportNumbers
      }`;
      const tgUsername =
        formData?.tg.length === 0 ? "Kiritilmagan" : formData?.tg;
      const invoiceResponse = await axios.post(
        `${process.env.REACT_APP_API_URL}/invoices`,
        {
          clientName: formData?.fullName,
          clientAddress: formData?.location,
          clientPhone: `${formData?.phonePrefix}${formData?.phoneNumber
            .split(" ")
            .join("")}`,
          passport: passport,
          tgUsername: tgUsername,
        }
      );

      const courseResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/courses`
      );

      const filteredCourse = courseResponse.data.filter(
        (course) => course.route === route
      );

      if (filteredCourse.length === 0) {
        return errorToastify("Курс с указанным путем не найден");
      }

      await axios.post(`${process.env.REACT_APP_API_URL}/orders/create`, {
        clientName: formData?.fullName,
        clientAddress: formData?.location,
        clientPhone: `${formData?.phonePrefix}${formData?.phoneNumber
          .split(" ")
          .join("")}`,
        passport: passport,
        tgUsername: tgUsername,
        invoiceNumber: invoiceResponse?.data?.invoiceNumber,
        status: "ВЫСТАВЛЕНО",
        create_time: Date.now(),
        prefix: filteredCourse[0].prefix,
        course_id: filteredCourse[0]._id,
        courseTitle: filteredCourse[0].title,
        amount: filteredCourse[0].price,
      });

      dispatch(setAuthData(invoiceResponse.data._id));
      dispatch(setRoute(route));
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
    const value = e.target.value.replace(/[^0-9]/g, ""); // Replace any non-numeric character
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
              placeholder="@username"
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

          <button
            type="submit"
            className="w-full bg-[#60a5fa] hover:bg-[#488eff] text-white text-sm py-3 rounded-lg"
            disabled={loading}
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

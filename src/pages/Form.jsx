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
    location: "",
    passportLetters: "",
    passportNumbers: "",
    tg: "",
    phonePrefix: "+998",
    phoneNumber: "",
  });

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
    const splitedName = formData.fullName.trim().split(" ");

    if (
      !formData.fullName ||
      !formData.location ||
      !formData.phoneNumber ||
      !formData.passportLetters ||
      !formData.passportNumbers
    ) {
      return warningToastify("Заполните данные для оплаты");
    }

    if (splitedName.length < 2) {
      return warningToastify("Введите полное Ф.И.О");
    }

    if (containsNumber(formData.fullName)) {
      return warningToastify("Имя не может содержать цифры");
    }

    if (
      formData.passportLetters.length !== 2 ||
      formData.passportNumbers.length !== 7
    ) {
      return warningToastify(
        "Введите номер паспорта в правильном формате (2 буквы и 7 цифр)"
      );
    }

    if (containsLetter(formData.phoneNumber)) {
      return warningToastify("Телефонный номер не может содержать буквы");
    }

    const phoneRegex = phoneFormats[formData.phonePrefix];
    const expectedLength = String(phoneRegex)
      .match(/\d/g)
      .reduce((total, current) => total + parseInt(current), 0);

    if (formData.phoneNumber.length !== expectedLength) {
      return warningToastify("Введите номер телефона в правильном формате");
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
      const tgUsername = formData?.tg.length === 0 ? 'Не указан' : formData?.tg
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

      await axios.post(
        `${process.env.REACT_APP_API_URL}/orders/create`,
        {
          clientName: formData?.fullName,
          clientAddress: formData?.location,
          clientPhone: `${formData?.phonePrefix}${formData?.phoneNumber
            .split(" ")
            .join("")}`,
          passport: passport,
          tgUsername: tgUsername,
          invoiceNumber: invoiceResponse?.data?.invoiceNumber,
          status: "ВЫСТАВЛЕНО",
        }
      );

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
    if (name === "phonePrefix") {
      setFormData({ ...formData, phonePrefix: value, phoneNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\s+/g, "");
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
              className=" text-sm font-medium text-gray-700 flex"
            >
              ФИО<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block transition duration-200 ease-in-out"
              placeholder="Введите ФИО"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="passportLetters"
              className=" text-sm font-medium text-gray-700"
            >
              Паспорт<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                id="passportLetters"
                name="passportLetters"
                type="text"
                maxLength="2"
                className="w-1/4 px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 uppercase"
                placeholder="AD"
                value={formData.passportLetters}
                onChange={handleChange}
              />
              <input
                id="passportNumbers"
                name="passportNumbers"
                type="text"
                maxLength="7"
                inputMode="numeric"
                pattern="\d*"
                className="w-3/4 px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="1234567"
                value={formData.passportNumbers}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location Input */}
          <div className="space-y-2">
            <label
              htmlFor="location"
              className=" text-sm font-medium text-gray-700 flex"
            >
              Адрес<span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block transition duration-200 ease-in-out"
              placeholder="Введите Адрес"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Telegram Input */}
          <div className="space-y-2">
            <label htmlFor="tg" className=" text-sm font-medium text-gray-700">
              Телеграм
            </label>
            <input
              id="tg"
              name="tg"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block transition duration-200 ease-in-out"
              placeholder="@username"
              value={formData.tg}
              onChange={handleChange}
            />
          </div>

          {/* Phone Input */}
          <div className="flex gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phonePrefix"
                className=" text-sm font-medium text-gray-700 flex"
              >
                Код страны
              </label>
              <select
                id="phonePrefix"
                name="phonePrefix"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
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
                className=" text-sm font-medium text-gray-700 flex"
              >
                Номер телефона<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                maxLength={String(phoneFormats[formData.phonePrefix])
                  .match(/\d/g)
                  .reduce((total, current) => total + parseInt(current), 0)}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block transition duration-200 ease-in-out"
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
            className="w-full bg-[#60a5fa] hover:bg-[#488eff] text-white text-sm py-3 rounded-lg transition duration-200 ease-in-out"
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

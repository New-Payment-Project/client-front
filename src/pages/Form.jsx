import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthData, setRoute } from "../redux/slices/AuthSlice";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import constants from "../constants/constants";
import phoneValidation from "../components/validations/phoneValidation";
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
    phonePrefix: "+998",
    phoneNumber: "",
  });

  const { formatPhoneNumber } = phoneValidation({
    formData: formData,
    phoneFormats: phoneFormats,
  });

  const containsNumber = (str) => {
    const regex = /\d/;
    return regex.test(str);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const splitedName = formData.fullName.trim().split(" ");

    if (!formData.fullName || !formData.location || !formData.phoneNumber) {
      return warningToastify("Заполните данные для оплаты");
    }

    if (splitedName.length < 2) {
      return warningToastify("Введите полное Ф.И.О");
    }

    if (containsNumber(formData.fullName)) {
      return warningToastify("Имя не может содержать цифры");
    }

    const phoneRegex = phoneFormats[formData.phonePrefix];
    const cleanedPhoneNumber = formData.phoneNumber.replace(/\s+/g, "");
    const expectedLength = String(phoneRegex)
      .match(/\d/g)
      .reduce((total, current) => total + parseInt(current), 0);

    if (cleanedPhoneNumber.length !== expectedLength) {
      return warningToastify("Введите номер телефона в правильном формате");
    }
    return handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/invoices`,
        {
          clientName: formData?.fullName,
          clientAddress: formData?.location,
          clientPhone: `${formData?.phonePrefix} ${formData?.phoneNumber}`,
        }
      );

      dispatch(setAuthData(response.data._id));
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
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setFormData({ ...formData, phoneNumber: formattedValue });
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
              className="block text-sm font-medium text-gray-700"
            >
              ФИО
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
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Адрес
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

          <div className="flex gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phonePrefix"
                className="block text-sm font-medium text-gray-700"
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
                className="block text-sm font-medium text-gray-700"
              >
                Номер телефона
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block transition duration-200 ease-in-out"
                placeholder={phonePlaceholders[formData.phonePrefix]}
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

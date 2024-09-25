import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "../redux/slices/AuthSlice";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  

  const [formData, setFormData] = useState({
    fullName: authData?.fullName || "",
    location: authData?.address || "",
    phonePrefix: authData?.phone?.slice(0, authData?.phone?.length - 12) || "+998",
    phoneNumber: authData?.phone?.slice(-12) || "",
    email: authData?.email || "",
  });

  const validateForm = (e) => {
    e.preventDefault();
    const splitedName = formData.fullName.trim().split(" ").length;

    if (splitedName < 3 || splitedName > 4) {
      return console.log("Invalid FIO");
    }
    if (formData.location.length < 25) {
      return console.log("Invalid Location");
    }
    return handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setAuthData({
        fullName: formData.fullName,
        address: formData.location,
        email: formData.email,
        phone: `${formData.phonePrefix} ${formData.phoneNumber}`,
      })
    );
    navigate("/course-info");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setFormData({ ...formData, phoneNumber: formattedValue });
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");

    let formatted = "";

    if (cleaned.length > 0) {
      formatted += `${cleaned.slice(0, 2)}`;
    }
    if (cleaned.length > 2) {
      formatted += ` ${cleaned.slice(2, 5)}`;
    }
    if (cleaned.length > 5) {
      formatted += `-${cleaned.slice(5, 7)}`;
    }
    if (cleaned.length > 7) {
      formatted += `-${cleaned.slice(7, 9)}`;
    }

    return formatted;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="w-full max-w-md bg-base-200 shadow-2xl rounded-lg overflow-hidden">
        <form onSubmit={validateForm} className="space-y-6 p-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium">
              ФИО
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full px-4 py-3 bg-base-100 border-2 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
              placeholder="Введите ФИО (Фамилия Имя Отчество)"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium">
              Локация
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="w-full px-4 py-3 bg-base-100 border-2 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
              placeholder="Введите Адрес"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="flex">
            <div className="space-y-2">
              <label
                htmlFor="phonePrefix"
                className="block text-sm font-medium"
              >
                Код страны
              </label>
              <select
                id="phonePrefix"
                name="phonePrefix"
                className="w-full px-4 py-3 bg-base-100 border-2 border-gray-300 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
                value={formData.phonePrefix}
                onChange={handleChange}
              >
                <option value="+998">+998</option>
                <option value="+1">+1</option>
                <option value="+7">+7</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
            </div>

            <div className="space-y-2 flex-1">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium"
              >
                Номер телефона
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="w-full px-4 py-3 bg-base-100 border-2 border-gray-300  text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
                placeholder="(__)___-__-__"
                required
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Электронный адрес
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="w-full px-4 py-3 bg-base-100 border-2 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
              placeholder="Введите Email (Электронный адрес)"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

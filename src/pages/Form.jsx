import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can add validation or data processing here if needed
    navigate('/course-info'); // Redirect to the desired route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              ФИО
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
              placeholder="Введите ФИО (Фамилия Имя Отчество)"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Локация
            </label>
            <select
              id="location"
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
            >
              <option value="">Выберите город</option>
              <option value="tashkent">Ташкент</option>
              <option value="samarkand">Самарканд</option>
              <option value="bukhara">Бухара</option>
              <option value="andijan">Андижан</option>
              <option value="namangan">Наманган</option>
              <option value="fergana">Фергана</option>
              <option value="kokand">Коканд</option>
              <option value="margilan">Маргилан</option>
              <option value="nukus">Нукус</option>
              <option value="urgench">Ургенч</option>
              <option value="khiva">Хива</option>
              <option value="navoi">Навои</option>
              <option value="jizzakh">Джизак</option>
              <option value="termez">Термез</option>
              <option value="karshi">Карши</option>
              <option value="shakhrisabz">Шахрисабз</option>
              <option value="gulistan">Гулистан</option>
              <option value="chirchiq">Чирчик</option>
              <option value="angren">Ангрен</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Номер телефона
            </label>
            <div className="flex">
              <select
                id="countryCode"
                className="px-3 py-3 bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
              >
                <option value="+998">+998 (UZ)</option>
                <option value="+7">+7 (RU)</option>
                <option value="+1">+1 (US)</option>
              </select>
              <input
                id="phoneNumber"
                type="tel"
                className="flex-1 px-4 py-3 bg-white border-2 border-l-0 border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block transition duration-200 ease-in-out hover:border-blue-300"
                placeholder="Введите номер телефона"
              />
            </div>
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

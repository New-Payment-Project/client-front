  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import axios from "axios";
  import PaymeForm from "../components/PaymentForms/PaymeForm";
  import UzumForm from "../components/PaymentForms/UzumForm";
  import ClickForm from "../components/PaymentForms/ClickForm";

  const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [courseInfo, setCourseInfo] = useState([]);
    const [invoice, setInvoice] = useState([]);
    const clientId = useSelector((state) => state.auth.clientId);
    const route = useSelector((state) => state.auth.route);

    useEffect(() => {
      const fetchCourses = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/courses`
          );

          const filteredData = response.data.filter(
            (course) => course.route === route
          );
          setCourseInfo(filteredData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const fetchInvoices = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/invoices/${clientId}`
          );
          setInvoice(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchInvoices();
      fetchCourses();
    }, [clientId, route]);

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    const expirationDate = (nowDate) => {
      return formatDate(
        new Date(new Date(nowDate).getTime() + +3 * 24 * 60 * 60 * 1000)
      );
    };

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <p className="text-red-500 text-xl">Ошибка загрузки данных</p>
        </div>
      );
    }

    if (courseInfo.length === 0) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <p className="text-red-500 text-xl">Курс не найден</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500 flex justify-between items-center text-white rounded-t-xl">
            <img src="norbekov.png" className="lg:h-[60px] h-[40px]" alt="Logo" />
            <h1 className="text-lg lg:text-2xl font-bold">Оплата услуг</h1>
          </div>

          <div className="p-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-700">
              СЧЕТ НА ОПЛАТУ № {invoice.invoiceNumber} от{" "}
              {
                invoice?.createdAt
                  ?.replace("T", " ")
                  .replace("Z", "")
                  .split(".")[0]
              }
              <br /> к Договору № ДХ-1404-06/20 от 03.06.2020
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="font-bold text-gray-700">
                  <span className="font-bold">Исполнитель:</span> OOO «SUVAN NET»
                </h2>
                <p className="text-gray-600">
                  <span className="font-bold">Адрес:</span> город Ташкент, ул.
                  Олмачи, 25
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Телефоны:</span> (+998 78)
                  113-44-54, (+998 97) 830-44-54
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Эл.почта:</span> info@ahost.uz
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Расчетный счет:</span>{" "}
                  20208000104839322001
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Банк:</span> АКИБ «Ипотека-банк»
                  Алмазарского филиала, г. Ташкент
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">МФО:</span> 00901
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">ИНН:</span> 301551793
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">ОКЭД:</span> 63110
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Рег. код НДС:</span> 326090022300
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-gray-600">
                  <span className="font-bold">Заказчик:</span>{" "}
                  {invoice.clientName}
                </h2>
                <p className="text-gray-600 whitespace-normal break-words">
                  <span className="font-bold">Адрес:</span>{" "}
                  {invoice.clientAddress}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Телефон:</span>{" "}
                  {invoice.clientPhone}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="table-auto w-full bg-gray-50 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-indigo-500 text-white">
                    <th className="p-3 text-left">Услуги</th>
                    <th className="p-3 text-right">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {courseInfo.map((item, id) => (
                    <tr
                      key={id}
                      className="bg-gray-100 text-gray-600 border-gray-200"
                    >
                      <td className="p-3">{item.title}</td>
                      <td className="p-3 text-right">{item.price} сум</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-200 font-bold text-gray-600">
                    <td className="p-3">Итого к оплате</td>
                    <td className="p-3 text-right">
                      {courseInfo.reduce((total, item) => total + item.price, 0)}{" "}
                      сум
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-red-500">
                {invoice.status}
              </h2>
              <p className="text-gray-500">
                Срок оплаты: {expirationDate(invoice.createdAt)}
              </p>
            </div>

            <div className="mt-6">
              <p className="font-bold text-gray-500">
                Внимание! Оплата данного счета означает согласие с{" "}
                <Link to="#" className="link link-primary text-gray-500">
                  условиями предоставления услуг
                </Link>
                .
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Уведомление об оплате необязательно. Услуги предоставляются по
                факту поступления денежных средств на наш расчетный счет. После
                предоставления услуги, мы отправим уведомление об этом вам на ваш{" "}
                {invoice.email} электронный почтовый адрес.
              </p>
            </div>

            <div className="flex flex-col items-start mt-8 space-y-4">
              <h2 className="font-bold text-lg text-gray-500">
                Выберите метод оплаты:
              </h2>
              <div className="flex items-center justify-start gap-3 md:flex-row lg:flex-row flex-col">
                <PaymeForm
                  amount={courseInfo.reduce(
                    (total, item) => total + item.price,
                    0
                  )}
                  name={invoice.clientName}
                  phone={invoice.clientPhone}
                  courseName={courseInfo.map((item) => item.title).join(", ")}
                  courseDescription={courseInfo
                    .map((item) => item.description)
                    .join(", ")}
                />
                <ClickForm
                  amount={courseInfo.reduce(
                    (total, item) => total + item.price,
                    0
                  )}
                />
                <UzumForm
                  amount={courseInfo.reduce(
                    (total, item) => total + item.price,
                    0
                  )}
                  name={invoice.clientName}
                  phone={invoice.clientPhone}
                  courseName={courseInfo[0].title}
                  courseDescription={courseInfo[0].description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Payment;

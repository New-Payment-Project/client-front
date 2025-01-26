import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

  const token = localStorage.getItem("token");
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true);
        const invoiceResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/invoices/${clientId}`,
          authHeader
        );
        const courseResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/courses`,
          authHeader
        );

        const filteredCourse = courseResponse.data.filter(
          (course) => course.route === route
        );

        setInvoice(invoiceResponse.data);
        setCourseInfo(filteredCourse);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [clientId, route]);

  const courseAmount = courseInfo.reduce(
    (total, item) => total + item.price,
    0
  );

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

  const formattedCreatedAt = invoice?.createdAt
    ? formatDate(new Date(invoice.createdAt))
    : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-[#bed6fd] to-[#60a5fa] flex justify-between items-center text-white rounded-t-xl">
          <img
            src="norbekov2.png"
            className="lg:h-[60px] h-[40px]"
            alt="Logo"
          />
          <h1 className="text-lg lg:text-2xl font-bold">Оплата услуг</h1>
        </div>

        <div className="p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-700">
            СЧЕТ НА ОПЛАТУ ДОГОВОРА № {courseInfo[0].prefix}/
            {invoice.invoiceNumber} от {formattedCreatedAt}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-gray-700">
                <span className="font-bold">Исполнитель:</span> "NORBEKOV
                PSIXOLOGIK VA FIZIOLOGIK KURSLARI" MCHJ
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Адрес:</span> Toshkent shahar,
                Olmazor tumani, Yuqori Sebzor MFY, Sebzor S17/18, 52A uy
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Телефоны:</span> +998 99 846 66 17
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Эл.почта:</span>{" "}
                info@norbekovgroup.uz
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Расчетный счет:</span> 2020 8000
                7071 6186 2001
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Банк:</span> MILLIY BANK, Головной
                офис
              </p>
              <p className="text-gray-600">
                <span className="font-bold">МФО:</span> 01158
              </p>
              <p className="text-gray-600">
                <span className="font-bold">ИНН:</span> 311 696 576
              </p>
              <p className="text-gray-600">
                <span className="font-bold">ОКЭД:</span> 64190
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600">
                <span className="font-bold">Заказчик:</span>{" "}
                {invoice.clientName}
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Телефон:</span>{" "}
                {invoice.clientPhone}
              </p>
              {invoice.tgUsername && (
                <p className="text-gray-600 whitespace-normal break-words">
                  <span className="font-bold">Телеграм:</span>{" "}
                  {invoice.tgUsername}
                </p>
              )}
            </div>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="table-auto w-full bg-gray-50 rounded-lg shadow-md">
              <thead>
                <tr className="bg-[#60a5fa] text-white">
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
            <h2
              className={`lg:text-3xl text-xl md:text-2xl font-bold ${
                invoice?.status === "НЕ ОПЛАЧЕНО"
                  ? "text-red-500"
                  : invoice?.status === "ВЫСТАВЛЕНО"
                  ? "text-orange-500"
                  : "text-green-500"
              } `}
            >
              {invoice?.status}
            </h2>
            <p className="text-gray-500">
              Срок оплаты: {expirationDate(invoice.createdAt)}
            </p>
          </div>

          {invoice.status !== "ОПЛАЧЕНО" && invoice.status !== "ОТМЕНЕНО" ? (
            <div>
              <div className="flex flex-col items-start mt-6 space-y-4">
                <h2 className="font-bold text-lg text-gray-500">
                  Выберите метод оплаты:
                </h2>
                <div className="flex items-center justify-start gap-3 md:flex-row lg:flex-row flex-col">
                  <PaymeForm
                    name={invoice.clientName}
                    phone={invoice.clientPhone}
                    amount={courseAmount}
                    address={invoice.clientAddress}
                    courseId={courseInfo[0]._id}
                    invoiceId={invoice.invoiceNumber}
                    prefix={courseInfo[0].prefix}
                    tgUsername={invoice.tgUsername}
                    passport={invoice.passport}
                    courseTitle={courseInfo[0].title}
                  />
{/* 
                  <ClickForm
                    amount={courseInfo.reduce(
                      (total, item) => total + item.price,
                      0
                    )}
                    merchant_trans_id={invoice.invoiceNumber}
                    course_id={courseInfo[0]._id}
                  />

                  <UzumForm
                    courseId={courseInfo[0]._id}
                    invoiceNumber={invoice.invoiceNumber}
                    amount={courseInfo.reduce(
                      (total, item) => total + item.price,
                      0
                    )}
                  /> */}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Payment;

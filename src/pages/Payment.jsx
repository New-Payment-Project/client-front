import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchClients } from "../redux/slices/AuthSlice";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const clientData = useSelector((state) => state.auth.clientData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  useEffect(() => {
    if (
      Object.keys(clientData).length === 0 ||
      Object.values(clientData).includes(null || undefined)
    ) {
      navigate("/");
    }
  }, [clientData, navigate]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const todayDate = formatDate(new Date());

  const dueDate = formatDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-base-200 shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-base-300 flex justify-between items-center">
          <img src="norbekov.png" className="lg:h-[60px] h-[40px]" alt="" />
        </div>

        <div className="p-6">
          <h1 className="text-xl lg:text-2xl font-bold text-center mb-6">
            СЧЕТ НА ОПЛАТУ № {clientData.invoiceNumber} от {todayDate}
            <br />к Договору № ДХ-1404-06/20 от 03.06.2020
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="font-bold">Исполнитель: OOO «SUVAN NET»</h2>
              <p>
                <span className="font-bold">Адрес:</span> город Ташкент, ул.
                Олмачи, 25
              </p>
              <p>
                <span className="font-bold">Телефоны:</span> (+998 78)
                113-44-54, (+998 97) 830-44-54
              </p>
              <p>
                <span className="font-bold">Эл.почта:</span> info@ahost.uz
              </p>
              <p>
                <span className="font-bold">Расчетный счет:</span>{" "}
                20208000104839322001
              </p>
              <p>
                <span className="font-bold">Банк:</span> АКИБ «Ипотека-банк»
                Алмазарского филиала, г. Ташкент
              </p>
              <p>
                <span className="font-bold">МФО:</span> 00901
              </p>
              <p>
                <span className="font-bold">ИНН:</span> 301551793
              </p>
              <p>
                <span className="font-bold">ОКЭД:</span> 63110
              </p>
              <p>
                <span className="font-bold">Рег. код НДС:</span> 326090022300
              </p>
            </div>
            <div>
              <h2 className="font-bold">Заказчик: {clientData.clientName}</h2>
              <p>
                <span className="font-bold">Адрес:</span>{" "}
                {clientData.clientAddress}
              </p>
              <p>
                <span className="font-bold">Телефон:</span>{" "}
                {clientData.clientPhone}
              </p>
              <p>
                <span className="font-bold">Эл.почта:</span> {clientData.email}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Услуги</th>
                  <th>Стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Регистрация домена - qwertyuio.uz - 1 год(а) ({todayDate} -{" "}
                    {formatDate(
                      new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                    )}
                    )
                  </td>
                  <td>27000 сум</td>
                </tr>
                <tr className="font-bold">
                  <td>Итого к оплате</td>
                  <td>27000 сум</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-red-500">
              {clientData.status}
            </h2>
            <p>Срок оплаты: {dueDate}</p>
          </div>

          <div className="mt-6">
            <p className="font-bold">
              Внимание! Оплата данного счета означает согласие с{" "}
              <Link to="#" className="link link-primary">
                условиями предоставления услуг
              </Link>
              .
            </p>
            <p className="mt-2">
              Уведомление об оплате необязательно. Услуги предоставляются по
              факту поступления денежных средств на наш расчетный счет. После
              предоставления услуги, мы отправим уведомление об этом вам на ваш
              JalilovAbduvaliy@gmail.com электронный почтовый адрес.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-start">
            <h2 className="label-text font-bold mb-4">
              Выберите метод оплаты:
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="payme"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={selectedPaymentMethod === "PayMe"}
                  onChange={() => handlePaymentMethodSelect("PayMe")}
                />
                <label
                  htmlFor="payme"
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="payme.png"
                    className="lg:h-[40px] h-[30px]"
                    alt="PayMe Logo"
                  />
                </label>
              </div>
              {selectedPaymentMethod === "PayMe" && (
                <div className="mt-4">
                  <a href="https://payme.uz/checkout/66f3f7c6aefc1a4dd45f78ad?back=http:%2F%2Flocalhost:3000%2F&timeout=15000&lang=ru">
                    <button className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105">
                      Купить
                    </button>
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="click"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={selectedPaymentMethod === "Click"}
                  onChange={() => handlePaymentMethodSelect("Click")}
                />
                <label
                  htmlFor="click"
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="click.png"
                    className="lg:h-[40px] h-[30px]"
                    alt="Click Logo"
                  />
                </label>
              </div>
              {selectedPaymentMethod === "Click" && (
                <div className="mt-4">
                  <a href="https://my.click.uz/services/pay/AD8A4BD75F904C4CBBB2106005AD3557">
                    <button className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105">
                      Купить
                    </button>
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="uzum-bank"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={selectedPaymentMethod === "Uzum Bank"}
                  onChange={() => handlePaymentMethodSelect("Uzum Bank")}
                />
                <label
                  htmlFor="uzum-bank"
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="uzum-bank.png"
                    className="lg:h-[45px] h-[35px]"
                    alt="Uzum Bank Logo"
                  />
                </label>
              </div>
              {selectedPaymentMethod === "Uzum Bank" && (
                <div className="mt-4">
                  <a href="https://payment.apelsin.uz/merchant?serviceId=498614016">
                    <button className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105">
                      Купить
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

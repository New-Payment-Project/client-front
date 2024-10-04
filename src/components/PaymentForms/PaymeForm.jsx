import axios from "axios";
import React, { useRef, useState } from "react";
import errorToastify from "../toastify/errorToastify";

const PaymeForm = ({
  name,
  phone,
  address,
  amount,
  courseName,
  courseDescription,
  courseId,
  invoiceId,
}) => {
  const formRef = useRef(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  const createTransaction = async () => {
    const transactionTime = Date.now();

    try {
      const response = await axios.post(
        "https://course-server-327v.onrender.com/",
        {
          jsonrpc: "2.0",
          method: "CreateTransaction",
          params: {
            account: {
              course_id: courseId,
              clientName: name,
              clientPhone: phone,
              clientAddress: address,
            },
            amount: amount,
            id: invoiceId,
            time: transactionTime,
          },
        }
      );

      console.log("CreateTransaction Response:", response.data);
      return response.data.result.transaction;
    } catch (error) {
      console.error("Error in CreateTransaction request:", error);
      errorToastify(
        "An error occurred while creating the transaction. Please try again."
      );
      throw error;
    }
  };

const performTransaction = async (transactionId) => {
    try {
      const response = await axios.post(
        "https://course-server-327v.onrender.com/",
        {
          jsonrpc: "2.0",
          id: invoiceId,
          method: "PerformTransaction",
          params: {
            id: transactionId,
          },
        }
      );

      console.log("PerformTransaction Response:", response.data);

      if (response.data.result && response.data.result.success) {
        setPaymentStatus("Оплачено");
      } else {
        setPaymentStatus("Не оплачено");
        errorToastify("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error in PerformTransaction request:", error);
      setPaymentStatus("Не оплачено");
      errorToastify("An error occurred during payment. Please try again.");
    }
  };

  const handlePaymeClick = async (e) => {
    e.preventDefault();

    try {
      const checkResponse = await axios.post(
        "https://course-server-327v.onrender.com/",
        {
          jsonrpc: "2.0",
          method: "CheckPerformTransaction",
          params: {
            amount: amount,
            account: {
              course_id: courseId,
            },
          },
        }
      );

      console.log("CheckPerformTransaction Response:", checkResponse.data);

      if (checkResponse.data.result.allow) {
        const transactionId = await createTransaction();

        if (formRef.current) {
          formRef.current.submit();
        }

        await performTransaction(transactionId);
      } else {
        errorToastify(
          "Transaction not allowed. Please check your details or try again."
        );
      }
    } catch (error) {
      console.error("Error in CheckPerformTransaction request:", error);
      errorToastify("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form ref={formRef} method="POST" action="https://checkout.paycom.uz">
        <input type="hidden" name="merchant" value="65cc5f073c319dec9d8ae9d9" />
        <input type="hidden" name="amount" value={`${amount}00`} />
        <input type="hidden" name="description" value={courseDescription} />
        <input type="hidden" name="account[name]" value={name} />
        <input type="hidden" name="account[phone]" value={phone} />
        <input type="hidden" name="account[payment]" value={courseName} />

        <input
          type="hidden"
          name="callback"
          value="https://your-server.com/payme-callback"
        />

        <button
          onClick={handlePaymeClick}
          className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          <img src={`payme.png`} className="h-6" alt={`Payme Logo`} />
        </button>
      </form>

      {paymentStatus && (
        <div
          className={`mt-4 text-lg ${
            paymentStatus === "Оплачено" ? "text-green-500" : "text-red-500"
          }`}
        >
          Статус оплаты: {paymentStatus}
        </div>
      )}
    </>
  );
};

export default PaymeForm;

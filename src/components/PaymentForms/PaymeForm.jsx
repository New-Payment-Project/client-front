import axios from "axios";
import React, { useRef, useState } from "react";
import errorToastify from "../toastify/errorToastify";

const PaymeForm = ({
  clientName,
  clientPhone,
  amount,
  courseName,
  courseDescription,
  courseId,
  invoiceId,
}) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

const handlePaymeClick = async (e) => {
  e.preventDefault();

  if (isSubmitting) return; // Prevent double submission
  setIsSubmitting(true);

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

    if (checkResponse.data.result && checkResponse.data.result.allow) {
      await createTransaction();

      if (formRef.current) {
        formRef.current.submit();
      }
    } else {
      errorToastify("Transaction not allowed. Please check your details or try again.");
    }
  } catch (error) {
    console.error("Error in CheckPerformTransaction request:", error);
    errorToastify("An error occurred. Please try again later.");
  } finally {
    setIsSubmitting(false); // Re-enable button after process
  }
};



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
            },
            amount: amount,
            id: invoiceId,
            time: transactionTime,
          },
        }
      );
      console.log(response)

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

  

  return (
    <>
      <form ref={formRef} method="POST" action="https://checkout.paycom.uz">
        <input type="hidden" name="merchant" value="65cc5f073c319dec9d8ae9d9" />
        <input type="hidden" name="amount" value={`${amount}00`} />
        <input type="hidden" name="description" value={courseDescription} />
        <input type="hidden" name="account[name]" value={clientName} />
        <input type="hidden" name="account[phone]" value={clientPhone} />
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
    </>
  );
};

export default PaymeForm;

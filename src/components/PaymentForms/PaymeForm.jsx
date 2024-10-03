import React from "react";
import axios from "axios";

const PaymeForm = ({ name, phone, amount, courseName, courseDescription, courseId }) => {
  const handlePaymeClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://course-server-327v.onrender.com/", {
        jsonrpc: "2.0",
        method: "CheckPerformTransaction",
        params: {
          amount: amount,
          account: {
            course_id: courseId,
          },
        },
      });

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <>
      <form method="POST" action="https://checkout.paycom.uz">
        <input type="hidden" name="merchant" value="65cc5f073c319dec9d8ae9d9" />
        <input type="hidden" name="amount" value={`${amount}00`} />
        <input type="hidden" name="description" value={courseDescription} />
        <input type="hidden" name="account[name]" value={name} />
        <input type="hidden" name="account[phone]" value={phone} />
        <input type="hidden" name="account[payment]" value={courseName} />

        <button
          className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          onClick={handlePaymeClick} // Attach the onClick handler here
        >
          <img src={`payme.png`} className="h-6" alt={`Payme Logo`} />
        </button>
      </form>
    </>
  );
};

export default PaymeForm;

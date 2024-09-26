import React from "react";

const PaymeForm = ({ name, phone, amount, courseName, courseDescription }) => {
  return (
    <form method="POST" action="https://checkout.paycom.uz">
      <input type="hidden" name="merchant" value="65cc5f073c319dec9d8ae9d9" />
      <input type="hidden" name="amount" value={`${amount}00`} />
      <input type="hidden" name="description" value={courseDescription} />
      <input type="hidden" name="account[name]" value={name} />
      <input type="hidden" name="account[phone]" value={phone} />
      <input type="hidden" name="account[payment]" value={courseName} />

      <button className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105">
        Купить
      </button>
    </form>
  );
};

export default PaymeForm;

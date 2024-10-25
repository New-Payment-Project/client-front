import React from "react";

const UzumForm = ({ courseId, invoiceNumber, amount }) => {
  const handlePayment = (e) => {
    const serviceId = 498614016;
    const amountInTiyin = amount * 100;
    const uzumUrl = `https://www.uzumbank.uz/open-service?serviceId=${serviceId}&courseId=${courseId}&invoiceNumber=${invoiceNumber}&amount=${amountInTiyin}`;
    window.location.href = uzumUrl;
  };
  return (
    <button
      className={`flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105`}
      onClick={handlePayment}
    >
      <img src={`uzum-bank.png`} className="h-6" alt={`Uzum Bank Logo`} />
    </button>
  );
};

export default UzumForm;

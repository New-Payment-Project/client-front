import React from "react";

const UzumForm = ({
  courseId,
  invoiceNumber,
  amount,
  clientName,
  clientPhone,
  clientAddress,
  passport,
  tgUsername,
  disabled,
}) => {
  return (
    <form
      method="POST"
      action="https://www.apelsin.uz/open-service?serviceId=498614016"
    >
      <button
        className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        disabled={disabled}
      >
        <img src={`uzum-bank.png`} className="h-6" alt={`Uzum Bank Logo`} />
      </button>
    </form>
  );
};

export default UzumForm;

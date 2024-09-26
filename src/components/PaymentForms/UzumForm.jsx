import React from "react";

const UzumForm = ({ name, phone, amount, courseName, courseDescription }) => {
  return (
    <form
      method="GET"
      action="https://www.uzumbank.uz/open-service?serviceId=498614016"
    >

      {/* Test cashier number */}
      <input type="hidden" name="cash" value={amount} />

      {/* Redirect URL after successful payment */}
      <input type="hidden" name="redirectUrl" value="http://localhost:3000/" />

      {/* Description shown to the user */}
      <input
        type="hidden"
        name="description"
        value={courseDescription}
      />

      {/* Additional data for testing */}
      <input type="hidden" name="extraData" value={courseName} />

      <button className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105">
        Оплатить
      </button>
    </form>
  );
};

export default UzumForm;

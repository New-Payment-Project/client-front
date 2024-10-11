import React from "react";

const UzumForm = ({ name, phone, amount, courseName, courseDescription }) => {
  return (
    <form
      method="POST"
      action="https://www.apelsin.uz/open-service?serviceId=498614016"
    >
      <input type="hidden" name="cash" value={`${amount}`} />

      <input
        type="hidden"
        name="redirectUrl"
        value="http://localhost:3000/course-info"
      />

      <input type="hidden" name="description" value={`${courseDescription}`} />
      <input type="hidden" name="phone" value={`${phone}`} />
      <input type="hidden" name="name" value={`${name}`} />

      <input type="hidden" name="extraData" value={`${courseName}`} />

      <button className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
        <img src={`uzum-bank.png`} className="h-6" alt={`Uzum Bank Logo`} />
      </button>
    </form>
  );
};

export default UzumForm;

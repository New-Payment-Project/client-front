import React from "react";

const ClickForm = ({ amount }) => {
  const handlePayment = (event) => {
    event.preventDefault();

    const service_id = "37390";
    const merchant_id = "12110";
    const transaction_param = "ORD-" + new Date().getTime();
    const merchant_user_id = "46320";
    const return_url = "http://localhost:3000";

    const paymentUrl = `https://my.click.uz/services/pay/?service_id=${service_id}&merchant_id=${merchant_id}&merchant_user_id=${merchant_user_id}&transaction_param=${transaction_param}&amount=${amount}&return_url=${encodeURIComponent(
      return_url
    )}`;

    window.location.href = paymentUrl;
  };
  return (
    <button
      onClick={handlePayment}
      className="w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105"
    >
      Купить
    </button>
  );
};

export default ClickForm;

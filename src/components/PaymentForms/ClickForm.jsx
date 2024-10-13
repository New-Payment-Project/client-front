import React from "react";

const ClickForm = ({ amount, merchant_trans_id }) => {
  const handlePayment = (event) => {
    event.preventDefault();

    const service_id = "37390";
    const merchant_id = "12110";
    const transaction_param = merchant_trans_id ;
    const merchant_user_id = "46320";
    const return_url = "https://norbekovgroup.vercel.app/face";
    const paymentUrl = `https://my.click.uz/services/pay/?service_id=${service_id}&merchant_id=${merchant_id}&merchant_user_id=${merchant_user_id}&transaction_param=${transaction_param}&amount=${amount}&return_url=${encodeURIComponent(
      return_url
    )}`;
      console.log(transaction_param, "aaaa")
      window.location.href = paymentUrl;
  };
  return (
    <button
      onClick={handlePayment}
      className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
    >
      <img src={`click.png`} className="h-6" alt={`Click Logo`} />
    </button>
  );
};

export default ClickForm;

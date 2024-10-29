import React from "react";

const ClickForm = ({ amount, merchant_trans_id, course_id }) => {
  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://api.norbekovgroup.uz/generate-click-payment-url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amount,
            merchant_trans_id: merchant_trans_id,
            course_id: course_id,
          }),
        }
      );
      // "https://my.click.uz/services/pay?service_id=37390&merchant_id=12110&amount=1100&transaction_param=00010&return_url=https%3A%2F%2Fmarkaz.norbekovgroup.uz%2Fcourse-info&merchant_user_id=46320&additional_param3=671247b849b6453dcb170dfe&hash=657414201a5bbf72b56e59648c0c0e41"

      const data = await response.json();

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        console.log(data);
        console.log(course_id);
        console.log(amount);
        console.log(merchant_trans_id);
      } else {
        console.error("Error generating payment URL", data);
      }
    } catch (error) {
      console.error("Error occurred during payment:", error);
    }
  };
  return (
    <button
      onClick={handlePayment}
      className={`flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105`}
    >
      <img src={`click.png`} className="h-6" alt={`Click Logo`} />
    </button>
  );
};

export default ClickForm;

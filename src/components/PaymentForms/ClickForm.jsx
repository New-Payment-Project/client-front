import React from "react";

const ClickForm = ({ amount, merchant_trans_id, course_id, disabled }) => {
  const handlePayment = async (event) => {
    event.preventDefault();

    if (disabled) return;

    try {
      const response = await fetch("https://api.norbekovgroup.uz/generate-click-payment-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          merchant_trans_id,
          course_id,
        }),
      });

      const data = await response.json();

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
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
      disabled={disabled}
      className={`flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
    >
      <img src={`click.png`} className="h-6" alt={`Click Logo`} />
    </button>
  );
};

export default ClickForm;

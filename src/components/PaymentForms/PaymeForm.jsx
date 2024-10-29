import React from "react";
import { Base64 } from "js-base64";

const PaymeForm = ({
  name,
  phone,
  amount,
  address,
  courseId,
  invoiceId,
  prefix,
  tgUsername,
  passport,
  courseTitle,
  disabled 
}) => {
  const handlePaymeClick = (e) => {
    e.preventDefault();

    if (disabled) return; 

    const merchantId = "6719e607e51de1c6a3a69819";

    const encodedPhone = encodeURIComponent(phone).replace(/%2B/g, "+");
    const encodedName = encodeURIComponent(name).replace(/%20/g, " ");
    const encodedTgusername = encodeURIComponent(tgUsername).replace(
      /%40/g,
      "@"
    );
    const encodedAddress = encodeURIComponent(address)
      .replace(/%20/g, " ")
      .replace(/%2/g, ", ");
    const encodedTitle = encodeURIComponent(courseTitle).replace(/%20/g, " ");
    const encodedPassport = encodeURIComponent(passport).replace(/%20/g, " ");

    const paramsString = `m=${merchantId};ac.course_id=${courseId};ac.courseTitle=${encodedTitle};ac.clientName=${encodedName};ac.passport=${encodedPassport};ac.tgUsername=${encodedTgusername};ac.prefix=${prefix};ac.invoiceNumber=${invoiceId};ac.clientPhone=${encodedPhone};ac.clientAddress=${encodedAddress};a=${
      amount * 100
    };`;

    const encodedParams = Base64.encodeURI(paramsString);

    const paymeLink = `https://checkout.paycom.uz/${encodedParams}`;
    console.log("Generated Payme Link:", paymeLink);

    window.location.href = paymeLink;
  };

  return (
    <button
      onClick={handlePaymeClick}
      disabled={disabled} 
      className={`flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <img src="payme.png" className="h-6" alt="Payme Logo" />
    </button>
  );
};

export default PaymeForm;

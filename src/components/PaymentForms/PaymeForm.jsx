import React from "react";
import { Base64 } from 'js-base64';

const base64EncodeUnicode = (str) => {
  return btoa(unescape(encodeURIComponent(str.replace(/%20/g, " "))));
};

const PaymeForm = ({
  name,
  phone,
  address,
  amount,
  courseId,
  invoiceId,
  tgUsername,
  passport
}) => {
  const handlePaymeClick = (e) => {
    e.preventDefault();

    const merchantId = "66f53ec035370d1d99fb8bff";

    const encodedPhone = encodeURIComponent(phone).replace(/%2B/g, '+');
    const encodedName = encodeURIComponent(name).replace(/%20/g, " ")
    const encodedAddress = encodeURIComponent(address).replace(/%20/g, " ")

    const paramsString = `m=${merchantId};ac.course_id=${courseId};ac.clientName=${encodedName};ac.clientPhone=${encodedPhone};ac.clientAddress=${encodedAddress};a=${amount * 100};`;

    const encodedParams = Base64.encodeURI(paramsString);

    const paymeLink = `https://checkout.paycom.uz/${encodedParams}`;
    console.log("Generated Payme Link:", paymeLink);

    window.location.href = paymeLink;
  };

  return (
    <button
      onClick={handlePaymeClick}
      className="flex items-center justify-center cursor-pointer space-x-2 p-4 w-48 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
    >
      <img src="payme.png" className="h-6" alt="Payme Logo" />
    </button>
  );
};

export default PaymeForm;

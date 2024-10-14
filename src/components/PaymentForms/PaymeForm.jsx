import React from "react";
import { Base64 } from 'js-base64';

const PaymeForm = ({
  name,
  phone,
  amount,
  address,
  courseId,
  invoiceId,
  prefix,
  tgUsername,
  passport
}) => {
  const handlePaymeClick = (e) => {
    e.preventDefault();

    const merchantId = "66f53ec035370d1d99fb8bff";

    const encodedPhone = encodeURIComponent(phone).replace(/%2B/g, '+');
    const encodedName = encodeURIComponent(name).replace(/%20/g, " ")
    const encodedAddress = encodeURIComponent(address).replace(/%20/g, " ")
    const encodedPassport = encodeURIComponent(passport).replace(/%20/g, " ")
    const encodedTgUsername = encodeURIComponent(tgUsername).replace(/%20/g, " ")

    const paramsString = `m=${merchantId};ac.course_id=${courseId};ac.clientName=${encodedName};ac.passport=${encodedPassport};ac.tgUsername=${encodedTgUsername};ac.invoiceNumber=${`${prefix}${invoiceId}`};ac.clientPhone=${encodedPhone};ac.clientAddress=${encodedAddress};a=${amount * 100};`;

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

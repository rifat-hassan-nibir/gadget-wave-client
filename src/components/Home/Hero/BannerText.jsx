import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BannerText = ({ heading, description, textColor, buttonText, buttonColor }) => {
  return (
    <>
      <h1 className={`text-[30px] font-bold text-${textColor}`}>{heading}</h1>
      <p className={`text-[16px] text-${textColor} mt-1`}>{description}</p>
      <div>
        <Link to="/shop">
          <button className={`text-[16px] text-white px-5 py-1.5 bg-${buttonColor} rounded-lg mt-6`}>{buttonText}</button>
        </Link>
      </div>
    </>
  );
};

export default BannerText;

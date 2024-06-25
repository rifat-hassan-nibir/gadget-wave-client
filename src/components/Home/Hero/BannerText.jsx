/* eslint-disable react/prop-types */
const BannerText = ({ heading, description, buttonText, buttonColor }) => {
  return (
    <>
      <h1 className="text-[30px] font-bold text-white">{heading}</h1>
      <p className="text-[16px] text-white font-light mt-1">{description}</p>
      <div>
        <button className={`text-[16px] text-white px-5 py-1.5 bg-${buttonColor} rounded-lg mt-6`}>{buttonText}</button>
      </div>
    </>
  );
};

export default BannerText;

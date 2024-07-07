/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomNavigationButton = ({ previousButtonClass, nextButtonClass, shadow, translate }) => {
  return (
    <div>
      {/* Previous */}
      <button
        className={`${previousButtonClass} absolute z-10 top-1/2 left-3 transform ${
          translate ? "-translate-y-[100%]" : "-translate-y-1/2"
        } bg-white p-5 rounded-full ${shadow && "shadow-lg shadow-gray-200"}`}
      >
        <FaArrowLeft className="text-[20px]" />
      </button>
      {/* Next */}
      <button
        className={`${nextButtonClass} absolute z-10 top-1/2 right-3 transform ${
          translate ? "-translate-y-[100%]" : "-translate-y-1/2"
        }  bg-white p-5 rounded-full ${shadow && "shadow-lg shadow-gray-200"}`}
      >
        <FaArrowRight className="text-[20px]" />
      </button>
    </div>
  );
};

export default CustomNavigationButton;

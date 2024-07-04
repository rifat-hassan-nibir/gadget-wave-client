/* eslint-disable react/prop-types */
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-red-600">
      <FaExclamationTriangle className="text-6xl mb-4" />
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-center">{message}</p>
    </div>
  );
};

export default Error;

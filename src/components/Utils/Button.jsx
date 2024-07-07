/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link} className="inline-block bg-secondary py-2.5 px-6 text-primary text-[17px] font-medium rounded-lg">
        {text}
      </Link>
    </div>
  );
};

export default Button;

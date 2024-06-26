/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, category }) => {
  return (
    <Link to="/">
      <div className="relative rounded-lg">
        <img src={image} className="h-[215px] w-full rounded-lg" />
        <p className="absolute bottom-3 left-3 text-xs bg-primary px-2 py-1 rounded text-white">{category}</p>
        <div className="absolute top-3 left-3 bg-white w-14 h-14 flex items-center justify-center rounded-full">
          <p className="text-center leading-[14px] mt-2">
            <span className="font-semibold text-[22px]">02</span> <br />
            <span className="text-xs">JAN</span>
          </p>
        </div>
      </div>
      <h3 className="text-[17px] font-medium mt-4">{title}</h3>
      <p className="text-[14px] text-gray-500 mt-1">
        Recentley I was invited by Nintendo of Canada to attend a very special Nintendo Holiday Showcase
      </p>
    </Link>
  );
};

export default BlogCard;

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ id, whiteBg, border, productImage, category, title, price }) => {
  return (
    <Link to={`/product-details/${id}`} className={`${border && "border"} h-auto hover:scale-[103%] transition-all duration-300`}>
      <img src={productImage} className="w-full" />
      <div className={`${whiteBg && "bg-white"} px-5 pb-5`}>
        <p className="text-[13px] text-gray-600">{category}</p>
        <h3 className="text-[16px] font-medium">{title}</h3>

        {/* Rating  */}
        <div className="flex items-center gap-0.5 mt-1">
          <button
            type="button"
            className="size-3.5 inline-flex justify-center items-center text-2xl rounded-full text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="size-3.5 inline-flex justify-center items-center text-2xl rounded-full text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="size-3.5 inline-flex justify-center items-center text-2xl rounded-full text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="size-3.5 inline-flex justify-center items-center text-2xl rounded-full text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="size-3.5 inline-flex justify-center items-center text-2xl rounded-full text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </button>
        </div>
        {/* End Rating  */}

        <p className="text-[15px] text-gray-600 mt-3">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

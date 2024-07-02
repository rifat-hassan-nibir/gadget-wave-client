import { FaRegHeart } from "react-icons/fa";
import headphone from "../assets/Product Images/Headphone.jpg";
import { BsBarChartFill } from "react-icons/bs";

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6 lg:gap-8">
        {/* product image */}
        <div className="lg:col-span-6">
          <img className="w-full" src={headphone} />
        </div>
        {/* details */}
        <div className="lg:col-span-6">
          <h2 className="text-[24px] font-semibold">Sony Headphone</h2>
          <p className="text-[13px] text-gray-600 mt-3">
            Brand: <span className="text-primary">Sony</span>
          </p>
          {/* compare & wishlist */}
          <div className="flex items-center gap-4 mt-5">
            {/* Rating  */}
            <div className="flex items-center gap-0.5">
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
            <div className="h-5 border-l-[1px] border-gray-300"></div>
            <button className="flex items-center gap-2">
              <FaRegHeart className="size-3.5" />
              <p className="text-[13px] font-medium">Add to Wishlist</p>
            </button>
            <div className="h-5 border-l-[1px] border-gray-300"></div>
            <button className="flex items-center gap-2">
              <BsBarChartFill className="size-3.5" />
              <p className="text-[13px] font-medium">Compare</p>
            </button>
          </div>

          <hr className="my-5" />

          {/* Product Details */}
          <p className="text-[15px] text-gray-600 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate totam veniam sint accusamus aliquid error quia nulla
            laboriosam saepe consectetur. Aspernatur fugiat provident facere quam? Saepe dolor obcaecati velit quod! <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque, atque corporis quo aliquid perspiciatis
            ratione. Error iure porro dicta nostrum repudiandae tempora architecto provident cum. Eligendi deserunt odit quisquam.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-[15px] font-semibold text-gray-600">
              Estimated Delivery: <span className="font-normal">5 days</span>
            </p>
            <p className="text-[15px] font-semibold text-gray-600">
              SKU: <span className="font-normal">#00458321</span>
            </p>
            <p className="text-[15px] font-semibold text-gray-600">
              Category: <span className="font-normal">Audio</span>
            </p>
          </div>

          <p className="text-[24px] font-semibold mt-6">$300</p>
          <p className="text-[16px] font-semibold text-primary mt-6">50 in stock</p>
          <button className="py-3 w-full bg-primary text-[16px] hover:bg-black transition-all duration-300 font-bold text-white rounded-lg mt-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { BsBarChartFill, BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import IconGroup from "../../IconGroup";

const Topbar = () => {
  return (
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 py-3 px-4 lg:px-0">
      {/* Logo */}
      <h1 className="text-2xl font-semibold order-1 lg:order-1">Click Market</h1>

      {/* Search bar */}
      <div className="w-full max-w-3xl order-3 lg:order-2 mx-auto bg-transparent border rounded-md focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-40">
        <form className="flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
          />

          <button
            type="button"
            className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary"
          >
            Join Us
          </button>
        </form>
      </div>

      {/* Icon Group */}
      <div className="order-2 lg:order-3">
        <div className="flex items-center gap-6 ">
          <IconGroup IconName={IoPersonOutline} text={"Sign In"} />
          <IconGroup IconName={BsBarChartFill} text={"Comparison"} />
          <IconGroup IconName={FaRegHeart} text={"Wishlist"} />
          <IconGroup IconName={BsCart3} text={"Cart"} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

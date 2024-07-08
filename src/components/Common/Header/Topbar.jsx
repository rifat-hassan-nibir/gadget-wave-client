import { BsBarChartFill, BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import MobileNavigation from "./Navigation/MobileNavigation";
import { TbSearch } from "react-icons/tb";
import IconGroup from "./IconGroup";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 lg:gap-14 py-3 px-4 lg:px-6">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-xl lg:text-2xl font-semibold order-1 lg:order-1">Gadget Wave</h1>
      </Link>

      {/* Search bar */}
      <div className="flex-1 order-3 sm:order-2 mx-auto bg-transparent border rounded-lg focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-40">
        <form className="flex">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 h-11 px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
          />

          <button
            type="button"
            className="h-11 px-4 py-2 text-white transition-colors duration-300 transform bg-primary rounded-r-lg rounded-l-none hover:bg-secondary"
          >
            <TbSearch className="text-[20px]" />
          </button>
        </form>
      </div>

      {/* Icon Group */}
      <div className="flex items-center order-2 sm:order-3">
        <div className="flex items-center gap-4 lg:gap-6">
          <IconGroup IconName={IoPersonOutline} text={"Sign In"} />
          <IconGroup IconName={BsBarChartFill} text={"Comparison"} />
          <IconGroup IconName={FaRegHeart} text={"Wishlist"} />
          <button onClick={() => navigate("/cart")}>
            <IconGroup IconName={BsCart3} text={"Cart"} />
          </button>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

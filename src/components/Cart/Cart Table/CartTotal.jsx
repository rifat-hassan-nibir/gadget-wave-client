/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CartTotal = ({ quantity }) => {
  return (
    <div className="p-7 border-[3px] border-black rounded-lg">
      <h1 className="text-black text-[14px] font-semibold">CART TOTAL</h1>
      <hr className="my-2" />
      {/* Sub Total and Total*/}
      <div className="flex flex-col gap-4 pt-2">
        <div className="flex justify-between">
          <p className="text-[16px] text-gray-600">Subtoal</p>
          <p className="text-[16px] text-gray-600">${quantity * 1000}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[20px] text-black">TOTAL</p>
          <p className="text-[20px] text-black">${quantity * 1000}</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-4">
        <Link
          to="/checkout"
          className="py-2 bg-primary text-[16px] text-white text-center rounded-lg hover:bg-secondary transition-all duration-300 hover:text-black"
        >
          <button>Proceed To Checkout</button>
        </Link>

        <Link to="/shop" className="py-2 bg-white text-[16px] text-black text-center border border-black rounded-lg">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;

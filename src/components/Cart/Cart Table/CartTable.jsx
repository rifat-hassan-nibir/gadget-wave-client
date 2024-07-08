/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import iphone from "../../../assets/Popular Products/iphone 14.jpg";

const CartTable = ({ quantity, handleIncrement, handleDecrement }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-[14px] font-semibold text-black">PRODUCT</th>
            <th></th>
            <th className="text-[14px] font-semibold text-black">PRICE</th>
            <th className="text-[14px] font-semibold text-black">SKU</th>
            <th className="text-[14px] font-semibold text-black">QUANTITY</th>
            <th className="text-[14px] font-semibold text-black">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <button className="flex items-center">
                <TiDeleteOutline className="text-[20px] text-red-600" />
              </button>
            </th>
            <td className="flex items-center gap-4">
              <img className="size-[100px]" src={iphone} />
            </td>
            <td>
              <h4 className="text-[18px] font-semibold">iPhone 14</h4>
            </td>
            <td>
              <p className="text-[16px] text-gray-600">$1000</p>
            </td>
            <td>
              <p className="text-[16px] text-gray-600">#4566jasdf</p>
            </td>
            <td>
              <div className="flex items-center">
                <button onClick={handleDecrement} className="p-1 border bg-gray-100">
                  <p className="text-[22px]">-</p>
                </button>
                <p className="px-2 py-1 border-t border-b">{quantity}</p>

                <button onClick={handleIncrement} className="p-1 border bg-gray-100">
                  <p className="text-[18px]">+</p>
                </button>
              </div>
            </td>
            <td>
              <p className="text-[16px] text-gray-600">${quantity * 1000}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;

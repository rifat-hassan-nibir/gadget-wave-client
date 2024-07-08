import CartTable from "../components/Cart/Cart Table/CartTable";
import CartTotal from "../components/Cart/Cart Table/CartTotal";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-3/5">
          <CartTable />
        </div>
        <div className="w-full lg:w-2/5 sticky top-6">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;

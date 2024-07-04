import Sidebar from "../components/Shop/Sidebar";
import ProductGrid from "../components/Shop/ProductGrid";

const Shop = () => {
  return (
    <div className=" container mx-auto px-4 lg:px-6 py-8 lg:py-12">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;

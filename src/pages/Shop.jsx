import Sidebar from "../components/Shop/Sidebar";
import ProductGrid from "../components/Shop/ProductGrid";

import { useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="col-span-3 hidden lg:block">
          <Sidebar setCategory={setCategory} setBrand={setBrand} />
        </div>
        <div className="col-span-9">
          <ProductGrid category={category} brand={brand} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

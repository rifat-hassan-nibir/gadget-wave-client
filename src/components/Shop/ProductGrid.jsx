import ProductCard from "../../components/ProductCard";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <BsGrid3X3Gap className="size-5" />
          <CiBoxList className="size-5" />
        </div>
        <div className="flex gap-4">
          <select className="select select-bordered rounded-lg select-sm w-full max-w-xs">
            <option>Sort by latest</option>
            <option>Sort by price: high to low</option>
            <option>Sort by price: low to high</option>
          </select>
        </div>
      </div>

      <hr className="mt-3 mb-6" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productImage={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            border={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

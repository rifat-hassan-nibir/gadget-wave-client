/* eslint-disable react/prop-types */
import ProductCard from "../../components/ProductCard";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NoProductsFound from "./NoProductsFound";

const ProductGrid = ({ category, brand }) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", category, brand],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/products?category=${category}&brand=${brand}`);
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

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

      {/* No Products Found */}
      {products.length === 0 && <NoProductsFound />}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
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

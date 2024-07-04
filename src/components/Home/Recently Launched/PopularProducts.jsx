import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";
import Gap from "../../Utils/Gap";
import axios from "axios";
import Loading from "../../Utils/Loading";
import Error from "../../Utils/Error";

const PopularProducts = () => {
  const {
    data: products = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/products`);
      return data;
    },
  });

  if (isPending) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="bg-[#F7F7F8]">
      <Gap />
      <div className="container mx-auto px-4 lg:px-6">
        <SectionTitle title={"Popular Products"} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              whiteBg={true}
              productImage={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              border={true}
            />
          ))}
        </div>
      </div>
      <Gap />
    </div>
  );
};

export default PopularProducts;

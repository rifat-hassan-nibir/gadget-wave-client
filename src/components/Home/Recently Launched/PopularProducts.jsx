import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";
import Gap from "../../Utils/Gap";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="bg-[#F7F7F8]">
      <Gap />
      <div className="container mx-auto px-4 lg:px-6">
        <SectionTitle title={"Popular Products"} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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

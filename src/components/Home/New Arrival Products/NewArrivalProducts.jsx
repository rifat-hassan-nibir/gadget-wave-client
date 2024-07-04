import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";

const NewArrivalProducts = () => {
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
      <SectionTitle title={"New Arrival Products"} />

      {/* for desktop */}
      <div className="hidden lg:block">
        <Swiper slidesPerView={5} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                id={product.id}
                productImage={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* for mobile */}
      <div className="block lg:hidden">
        <Swiper slidesPerView={2} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                id={product.id}
                productImage={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalProducts;

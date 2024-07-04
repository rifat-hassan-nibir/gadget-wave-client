import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../Utils/Loading";
import Error from "../../Utils/Error";

const NewArrivalProducts = () => {
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
    <div>
      <SectionTitle title={"New Arrival Products"} />

      {/* for desktop */}
      <div className="hidden lg:block">
        <Swiper slidesPerView={5} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard
                id={product._id}
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

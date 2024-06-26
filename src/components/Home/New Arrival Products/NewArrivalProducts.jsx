import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";
import macbookAir from "../../../assets/New Arrival Products/Macbook Air.jpg";
import doorCamera from "../../../assets/New Arrival Products/Door Camere.jpg";
import headPhones from "../../../assets/New Arrival Products/Headphone.jpg";
import wifiRouter from "../../../assets/New Arrival Products/Ring wifi router.jpg";
import ringStickCamera from "../../../assets/New Arrival Products/Ring Stick Up Camera Battery.jpg";
import iphone14 from "../../../assets/New Arrival Products/iphone 14.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const NewArrivalProducts = () => {
  return (
    <div>
      <SectionTitle title={"New Arrival Products"} />

      {/* for desktop */}
      <div className="hidden lg:block">
        <Swiper slidesPerView={5} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <ProductCard productImage={macbookAir} category={"Computers"} productName={"Mackbook Air"} price={1200} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={doorCamera} category={"Camera & Drones"} productName={"Door Camera"} price={400} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={headPhones} category={"Audio"} productName={"Sony Headphones"} price={500} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={wifiRouter} category={"Smart Home"} productName={"Ring Wifi Router"} price={100} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={ringStickCamera} category={"Camera"} productName={"Ring Stick Camera Battery"} price={250} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={iphone14} category={"Smart Phones"} productName={"iphone 14"} price={1000} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* for mobile */}
      <div className="block lg:hidden">
        <Swiper slidesPerView={2} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <ProductCard productImage={macbookAir} category={"Computers"} productName={"Mackbook Air"} price={1200} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={doorCamera} category={"Camera & Drones"} productName={"Door Camera"} price={400} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={headPhones} category={"Audio"} productName={"Sony Headphones"} price={500} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={wifiRouter} category={"Smart Home"} productName={"Ring Wifi Router"} price={100} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={ringStickCamera} category={"Camera"} productName={"Ring Stick Camera Battery"} price={250} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard productImage={iphone14} category={"Smart Phones"} productName={"iphone 14"} price={1000} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalProducts;

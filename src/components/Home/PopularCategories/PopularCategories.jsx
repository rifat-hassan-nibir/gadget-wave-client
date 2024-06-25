import SectionTitle from "../../Common/SectionTitle";
import CategoriesCard from "./CategoriesCard";
import audio from "../../../assets/Categories/Audio.jpeg";
import cameraAndDrone from "../../../assets/Categories/Camera & Drone.jpeg";
import cellPhones from "../../../assets/Categories/Cell Phones.jpeg";
import computers from "../../../assets/Categories/Computers.jpeg";
import dailyDeals from "../../../assets/Categories/Daily Deals.jpeg";
import ipadAndTablets from "../../../assets/Categories/ipad & tablets.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const PopularCategories = () => {
  return (
    <div>
      <SectionTitle title={"Popular Categories"} />

      {/* for desktop */}
      <div className="hidden lg:block">
        <Swiper slidesPerView={5} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <CategoriesCard categoryImage={audio} title={"Audio"} productNumber={8} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={cameraAndDrone} title={"Camera & Drone"} productNumber={9} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={cellPhones} title={"Cellphones"} productNumber={7} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={computers} title={"Computers"} productNumber={6} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={dailyDeals} title={"Daily Deals"} productNumber={12} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={ipadAndTablets} title={"ipads & Tablets"} productNumber={5} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* for mobile */}
      <div className="block lg:hidden">
        <Swiper slidesPerView={2} spaceBetween={24} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <CategoriesCard categoryImage={audio} title={"Audio"} productNumber={8} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={cameraAndDrone} title={"Camera & Drone"} productNumber={9} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={cellPhones} title={"Cellphones"} productNumber={7} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={computers} title={"Computers"} productNumber={6} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={dailyDeals} title={"Daily Deals"} productNumber={12} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard categoryImage={ipadAndTablets} title={"ipads & Tablets"} productNumber={5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategories;

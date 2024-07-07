import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Slide1 from "./Slide1";
import CustomNavigationButton from "../../Slider/CustomNavigationButton";

const Slider = () => {
  return (
    <div className="rounded-lg">
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".slider-next-button",
          prevEl: ".slider-prev-button",
        }}
        modules={[Navigation]}
        className="mySwiper3"
      >
        {/* Navigation Buttons */}
        <CustomNavigationButton previousButtonClass={"slider-prev-button"} nextButtonClass={"slider-next-button"} />

        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

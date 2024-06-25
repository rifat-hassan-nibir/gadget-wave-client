import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Slide1 from "./Slide1";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper3">
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

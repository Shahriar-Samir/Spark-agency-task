import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "./banner1";
import Banner2 from "./banner2";
import Banner3 from "./banner3";
import Banner4 from "./banner4";
import Banner5 from "./banner5";
import Banner6 from "./banner6";
import Banner7 from "./banner7";
import Banner8 from "./banner8";

const Header = () => {
  return (
    <header className="">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner3 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner4 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner5 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner6 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner7 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner8 />
        </SwiperSlide>
        ...
      </Swiper>
    </header>
  );
};

export default Header;

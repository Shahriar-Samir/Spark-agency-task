import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Banner1 from "./banners/banner1";
import Banner2 from "./banners/banner2";
import Banner3 from "./banners/banner3";
import Banner4 from "./banners/banner4";
import Banner5 from "./banners/banner5";
import Banner6 from "./banners/banner6";
import Banner7 from "./banners/banner7";
import Banner8 from "./banners/banner8";

const Header = () => {
  return (
    <header>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
      </Swiper>
    </header>
  );
};

export default Header;

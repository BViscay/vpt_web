import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import FotosHome from "../../../assets/HomeImage1.png";
import FotosHome1 from "../../../assets/HomeImage2.png";
import FotosHome2 from "../../../assets/HomeImage3.png";
import FotosHome3 from "../../../assets/HomeImage4.png";
import FotosHome4 from "../../../assets/HomeImage5.png";
import FotosHome5 from "../../../assets/HomeImage6.png";
import FotosHome6 from "../../../assets/HomeImage7.png";
import FotosHome7 from "../../../assets/HomeImage8.png";
import FotosHome8 from "../../../assets/HomeImage9.png";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={6}
      style={{height: "auto"}}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='h-full'>
        <img src={FotosHome} alt='FotosHome' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome1} alt='FotosHome1' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome2} alt='FotosHome2' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome3} alt='FotosHome3' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome4} alt='FotosHome4' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome5} alt='FotosHome5' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome6} alt='FotosHome5' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome7} alt='FotosHome5' />
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img src={FotosHome8} alt='FotosHome5' />
      </SwiperSlide>
    </Swiper>
  );
}

import { Navigation, Pagination,A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../css/Leeseoku.scss'

const Banner = () => {
  return (
    <Swiper className="banner"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className='slide0'></SwiperSlide>
      <SwiperSlide className='slide1'></SwiperSlide>
      <SwiperSlide className='slide2'></SwiperSlide>
    </Swiper>


  );
};
export default Banner
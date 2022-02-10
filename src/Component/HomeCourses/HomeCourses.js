import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HomeCourses.css";

// import required modules
import { Autoplay } from "swiper";



const HomeCourses = () => {

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                  }}
                  modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide> <img src='https://www.logodesign.net/images/nature-logo.png' alt='' /> </SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
                <SwiperSlide><img src='https://www.logodesign.net/images/nature-logo.png' alt='' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeCourses;
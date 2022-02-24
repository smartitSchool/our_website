import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import HomeService from './HomeService/HomeService';

const HomeServices = () => {
    const [services,setServices]=useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/services/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);
    return (
        <div>
            <h2 className='page-heading'><u>Our</u> Services</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                  }}
                  modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    services.map(service=><SwiperSlide>
                        <HomeService 
                        key={service.id}
                        service={service}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default HomeServices;
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HomeCourses.css";

// import required modules
import { Autoplay } from "swiper";
import HomeCourse from "./HomeCourse/HomeCourse";



const HomeCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/training/allTrainings')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, []);
    return (
        <div>
            <h2 className='page-heading'><u>Our</u> Courses</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
{
                    courses.map(course=><SwiperSlide>
                        <HomeCourse 
                        key={course.id}
                        course={course}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default HomeCourses;
import React from 'react';
import { Image } from 'react-bootstrap';

const HomeCourse = ({course}) => {
    const { course_name, description, fee, id, image } = course;
    return (
        <div>
            <Image src={`http://localhost:8081/${image}`} className='img-fluid my-4 swiper-item-image' />
            <h2 className='fw-bold'>{course_name}</h2>
            <p>{description.slice(0, 50)}...</p>
            <h5 className='fw-bold'>Price: {fee} BDT</h5>
        </div>
    );
};

export default HomeCourse;
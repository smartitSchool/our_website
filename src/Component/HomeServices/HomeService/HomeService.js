import React from 'react';
import { Image } from 'react-bootstrap';
const HomeService = ({ service }) => {
    const { title, description, price, image } = service;
    return (
        <div>
            <Image src={`http://localhost:8081/${image}`} className='img-fluid my-4 swiper-item-image' />
            <h2 className='fw-bold'>{title}</h2>
            <p>{description.slice(0, 50)}...</p>
            <h5 className='fw-bold'>Price: {price} BDT</h5>
        </div>
    );
};

export default HomeService;
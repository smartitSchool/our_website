import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, description, price, id, image } = service;
    return (
        <Row className='my-3 service-container'>
            <Col md={8} sm={12} className='my-4 px-4'>
                <h2 className='fw-bold'>{title}</h2>
                <p>{description.slice(0, 100)}</p>
                <h5 className='fw-bold'>Price: {price} BDT</h5>
                <Link to={`/details/${id}`} >
                    <Button>
                        Details
                    </Button>
                </Link>
            </Col>
            <Col md={4} sm={12}>
                <Image src={`http://localhost:8081/${image}`} className='img-fluid my-4' />
            </Col>
        </Row >
    );
};

export default Service;
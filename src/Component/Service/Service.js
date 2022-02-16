import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, description, price, id } = service;
    return (
        <Row className='my-3 service-container'>
            <Col md={8} sm={12} className='my-4 px-4'>
                <h2 className='fw-bold'>{title}</h2>
                <p>{description.slice(0, 100)}</p>
                <h5 className='fw-bold'>Price: {price}</h5>
                <Button variant='outlined'>
                    <Link to={`/details/${id}`} >Details</Link>
                </Button>
            </Col>
            <Col md={4} sm={12}>
                <Image src='https://static.remove.bg/remove-bg-web/a926ef00c5b240026e33dca1d7965424632c6781/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' fluid={true} />
            </Col>
        </Row >
    );
};

export default Service;
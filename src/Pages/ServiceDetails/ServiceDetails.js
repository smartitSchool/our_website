import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import OrderModal from './OrderModal/OrderModal';


const ServiceDetails = () => {
    const [modalShow, setModalShow] = useState(false);
    const [service, setService] = useState({});
    const { id } = useParams();

    const { title, description, price, image } = service;

    useEffect(() => {
        fetch(`http://localhost:8081/api/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [id])


    return (
        <div>
            <Header />
            <Container>
                <Row className='my-4'>
                    <Col md={6} xs={12}>
                        <div className='detail-image-container'>
                            <img className='img-fluid' src={`http://localhost:8081/${image}`} alt='' />
                        </div>
                        <button className='wide-btn-fill my-4' onClick={() => setModalShow(true)}>
                            Proceed to order
                        </button>
                    </Col>
                    <Col  className='' md={6} xs={12}>
                        <h2 className='' >{title}</h2>
                        <p>{description}</p>
                        <h5 className='fw-bold'>Price: <span className='color-a'>{price} BDT</span> </h5>

                    </Col>
                </Row>
                <OrderModal
                    title={title}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
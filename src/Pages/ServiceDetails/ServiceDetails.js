import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import OrderModal from './OrderModal/OrderModal';


const ServiceDetails = () => {
    const [modalShow, setModalShow] = useState(false);
    const [service, setService] = useState({});
    const { id } = useParams();

    const { title, description, price } = service;

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
            <Container className='text-center'>
                <div>
                    <img className='img-fluid' src='https://static.remove.bg/remove-bg-web/a926ef00c5b240026e33dca1d7965424632c6781/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt='' />
                    <h2 className='fw-bold' >{title}</h2>
                    <p>{description}</p>
                    <h5 className='fw-bold'>Price: <span className='color-a'>{price} BDT</span> </h5>
                </div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Order this
                </Button>
                <OrderModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Container>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
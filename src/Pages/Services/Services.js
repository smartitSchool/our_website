import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Service from '../../Component/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/services/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);
    return (
        <>
            <Header />

            
            <Banner bannerText='Our Services' />
            <Container>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                />)}
            </Container>
            <Footer />
        </>
    );
};

export default Services;
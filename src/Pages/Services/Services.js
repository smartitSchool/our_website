import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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


    const bannerText=['Web Development', 'ID Card Making', 'Calender Making']
    return (
        <>
            <Header />

            
            <Banner
                bannerText={bannerText}
                pageName='Services'
                imageLink='https://i.ibb.co/6H4zLhm/v796-nunny-03b.jpg'
            />
            <Container className='mb-4'>
                <h2 className='page-heading'><u>Our</u> Services</h2>
                <Row>
                    {services.map(service => <Service
                    key={service.id}
                    service={service}
                />)}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Services;
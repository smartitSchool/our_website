import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import HomeFacilities from '../../Component/HomeFacilities/HomeFacilities';

const Facilities = () => {
    return (
        <>
            <Header />
            <Banner bannerText={'Our Facilities'}/>
            <Container className='my-4'>
                <HomeFacilities/>
            </Container>
            <Footer/>
        </>
    );
};

export default Facilities;
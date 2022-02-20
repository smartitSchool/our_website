import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Reviews = () => {
    return (
        <>
            <Header />
            <Banner bannerText={'We Are Working, Comming soon'} />
            <Container></Container>
            <Footer/>
        </>
    );
};

export default Reviews;
import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Gallery = () => {
    const bannerText = ['We are working', 'Comming Soon']
    return (
        <>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='Gallery'
            />
            <Container></Container>
            <Footer/>
        </>
    );
};

export default Gallery;
import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import HomeFacilities from '../../Component/HomeFacilities/HomeFacilities';

const Facilities = () => {
    const bannerText = ['Our facilities--', 'Lifetime Support', '24/7 Support', 'Practise Lab Support', 'Class Video', 'Review Class','Job Placement']
    return (
        <>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='Facilities'
            />
            <Container className='my-4'>
                <HomeFacilities/>
            </Container>
            <Footer/>
        </>
    );
};

export default Facilities;
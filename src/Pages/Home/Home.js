import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import HomeAboutUs from '../../Component/HomeAboutUs/HomeAboutUs';
import HomeBanner from '../../Component/HomeBanner/HomeBanner';
import HomeCourses from '../../Component/HomeCourses/HomeCourses';
import HomeFacilities from '../../Component/HomeFacilities/HomeFacilities';
import HomeServices from '../../Component/HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <HomeBanner />
                <HomeAboutUs />
                <HomeCourses/>
                <HomeServices/>
                <HomeFacilities/>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;
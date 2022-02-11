import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import AboutUsImage from '../../Component/AboutUs/AboutUsImage/AboutUsImage';
import AboutUsText from '../../Component/AboutUs/AboutUsText/AboutUsText';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import './About.css'

const About = () => {
    return (
        <div className=''>
            <Header/>
            <Banner/>
            <Container className='my-4'>
            <h2 className='color-a'>Overview</h2>
            <hr />
                <AboutUsText/>
                <Row>
                    <Col xs={12} md={6}>
                    </Col>
                    <Col xs={12} md={6}>
                        <AboutUsImage/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default About;
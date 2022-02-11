import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUsImage from '../../Component/AboutUs/AboutUsImage/AboutUsImage';
import AboutUsText from '../../Component/AboutUs/AboutUsText/AboutUsText';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const About = () => {
    return (
        <div>
            <Header/>
            <Container className='my-4'>
            <h2 className='color-a'>About SIS</h2>
            <hr />
                <Row>
                    <Col xs={12} md={6}>
                        <AboutUsText/>
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
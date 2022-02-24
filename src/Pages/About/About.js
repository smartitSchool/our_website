import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import AboutUsText from '../../Component/AboutUs/AboutUsText/AboutUsText';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import './About.css'
import Mission from '../../Component/AboutUs/Mission/Mission';
import History from '../../Component/AboutUs/History/History';
import Value from '../../Component/AboutUs/Value/Value';
import Culture from '../../Component/AboutUs/Culture/Culture';

const About = () => {
    const bannerText=['Explore our website', 'Learn more about us']
    return (
        <div className=''>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='About us'
                imageLink='https://i.ibb.co/6H4zLhm/v796-nunny-03b.jpg'
            />
            <Container className='my-4'>
                <h2 className='page-heading'><u>About</u> Us</h2>
                <h2 className='sub-heading'>Overview</h2>
                <hr />
                <AboutUsText />
                <h2 className='sub-heading'>Mission</h2>
                <hr />
                <Mission />
                <h2 className='sub-heading'>History</h2>
                <hr />
                <History/>
                <h2 className='sub-heading'>Our Core Values</h2>
                <hr />
                <Value/>
                <h2 className='sub-heading'>Our Culture</h2>
                <hr />
                <Culture/>
            </Container>
            <Footer />
        </div>
    );
};

export default About;
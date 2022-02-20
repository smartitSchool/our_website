import React from 'react';
import { Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './AboutBanner.css';

const Banner = ({bannerText, pageName}) => {
    const arr = bannerText
    return (
        <div className='aboutBanner'>
            <Container>
                <h2>Smart IT School / { pageName}</h2>
                <h2 className='color-white'>&nbsp;
                    <Typewriter words={arr} loop={false} />
                </h2>
           </Container>
        </div>
    );
};

export default Banner;
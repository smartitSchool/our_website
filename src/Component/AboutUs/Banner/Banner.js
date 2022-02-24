import React from 'react';
import { Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

const Banner = ({bannerText, pageName, imageLink}) => {
    const arr = bannerText;
    const bannerStyle = {
        height: '400px',
        width: '100%',
        backgroundImage: `url(${imageLink})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <div style={bannerStyle}>
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
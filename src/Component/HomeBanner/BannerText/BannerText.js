import React from 'react';
// import { Container as div } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'

const BannerText = () => {

    const arr=['best IT institute in BD']
    return (
        <div>
            <h2>
            Smart IT School
               <sapn className='color-a'> <Typewriter words={arr} loop={false} /></sapn>
            </h2>
            <p className='text-justify'>
            Smart IT School, one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2008. Enriched with quality training this institute has never failed to help the individuals to reveal their talents making harmony between creativity and IT. No matter what is your background, we are offering 30 courses for you conducted by experienced trainers to advance your skills.
            </p>
            
            
        </div>
    );
};

export default BannerText;
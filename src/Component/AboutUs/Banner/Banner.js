import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './AboutBanner.css';

const Banner = ({bannerText}) => {
    const arr =[bannerText]
    return (
        <div className='aboutBanner'>
           <h2 style={{color:'red'}}>
               <Typewriter words={arr} loop={false} />
            </h2>
        </div>
    );
};

export default Banner;
import React from 'react';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';


const Admission = () => {
    const bannerText='Admission'
    return (
        <div>
            <Header/>
            <Banner bannerText={bannerText}/>
            <Footer/>            
        </div>
    );
};

export default Admission;
import React from 'react';
import { Container } from 'react-bootstrap';
import ITWorker from '../../../Images/IT_worker.png'


const BannerImage = () => {
    return (
        <Container className='p-2'>
            <img src={ITWorker} alt='' className='img-fluid'/>
        </Container>
    );
};

export default BannerImage;
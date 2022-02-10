import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BannerImage from './BannerImage/BannerImage';
import BannerText from './BannerText/BannerText';


const HomeBanner = () => {
    return (
        
            <Row className='d-flex align-items-center'>
                <Col sm={12} md={6}>
                    <BannerText />
                </Col>
                <Col sm={12} md={6}>
                    <BannerImage />
                </Col>
            </Row>

    );
};

export default HomeBanner;
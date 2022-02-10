import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SiteLogo from './SiteLogo/SiteLogo';
import './Footer.css'
import FooterContact from './FooterContact/FooterContact';
import QuickLinks from './QuickLinks/QuickLinks';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <SiteLogo />
                    </Col>
                    <Col xs={12} md={4}>
                        <FooterContact />
                    </Col>
                    <Col xs={12} md={4}>
                        <QuickLinks />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
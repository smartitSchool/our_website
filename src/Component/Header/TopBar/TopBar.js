import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/SIS-logo.png'
import './TopBar.css'
import TopBarInfo from './TopBarInfo/TopBarInfo';


const TopBar = () => {
    return (
        <div>
            <Container>
                <Row className='align-items-center py-2'>
                    <Col sm={12} md={4} className='logo-container'>
                        <img className='logo' src={logo} alt="smart IT School Logo" />
                    </Col>
                    <Col sm={12} md={8}>
                        <TopBarInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;
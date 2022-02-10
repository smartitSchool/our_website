import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import './FooterContact.css'


const FooterContact = () => {
    return (
        <Container className='my-3'>
            <h2 className='color-a text-center'>
                Contacts
            </h2>
            <ul className='list-styles-none'>
                <li>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-a'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <address className='color-a mx-2'>
                                Chowrongi Super Market, Shop No: 4,5,6,7,8 (4th Floor) Savar bustand , savar, Dhaka-1340.
                            </address>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-a'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className='mx-3'>
                                <p className='color-a'>
                                    +880 1688667870 <br /> +880 1747099119
                                </p>
                            </div>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-a'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className='mx-3'>
                                <p className='color-a'>
                                    info@smartitschool.com
                                </p>
                            </div>
                        </Col>
                    </Row>
                </li>
            </ul>
            {/* <Row>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    
                </Col>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    

                </Col>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    

                </Col>
            </Row> */}
        </Container>
    );
};

export default FooterContact;
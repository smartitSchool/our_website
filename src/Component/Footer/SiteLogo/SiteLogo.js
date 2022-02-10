import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import image from '../../../Images/SIS-logo.png'
import './SiteLogo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

const SiteLogo = () => {
    return (
        <div className='p-4'>
            <Container>
                <Image src={image} fluid={true} />
                <p className='footer-slogan color-white'>Be skilled at IT, Life will be shine.</p>
                <br />
                <Row className='text-center'>
                    <Col sm={3}>
                        <div className='footer-social-icon'>
                            <a className='color-white' href='https://www.facebook.com/SmartItSchool.com.bd' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-social-icon'>
                            <a className='color-white' href='https://www.facebook.com/SmartItSchool.com.bd' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-social-icon'>
                            <a className='color-white' href='https://www.facebook.com/SmartItSchool.com.bd' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-social-icon'>
                            <a className='color-white' href='https://www.facebook.com/SmartItSchool.com.bd' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SiteLogo;
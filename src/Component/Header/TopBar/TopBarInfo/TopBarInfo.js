import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import './TopBarInfo.css'
import { Link } from 'react-router-dom';

const TopBarInfo = () => {
    return (
        <div>
            <Row className='align-items-center'>
                <Col md={6} sm={6} xs={12}>
                    <p className='contact'>
                        <span className='phone-icon'>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </span>
                        (+880) 1688-667870
                    </p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className='text-end'>
                        <Link to='/login' className='btn-a btn'>
                            Login
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TopBarInfo;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Support from './Support/Support';
import './HomeFacilities.css';
import OnlineSupport from './OnlineSupport/OnlineSupport';
import PractiseLabSupport from './PractiseLabSupport/PractiseLabSupport';
import ClassVideo from './ClassVideo/ClassVideo';
import ReviewClass from './ReviewClass/ReviewClass';
import JobPlacement from './JobPlacement/JobPlacement';




const HomeFacilities = () => {
    return (
        <div className='my-4'>
            <h2 className='page-heading'><u>Our</u> Facilites</h2>
            <Row xs={1} sm={2} md={3} className="g-4">
            <Col>
                <Support/>
            </Col>
            <Col>
                <OnlineSupport/>
            </Col>
            <Col>
                <PractiseLabSupport/>
            </Col>
            <Col>
                <ClassVideo/>
            </Col>
            <Col>
                <ReviewClass/>
            </Col>
            <Col>
                <JobPlacement/>
            </Col>
        </Row>
        </div>
    );
};

export default HomeFacilities;
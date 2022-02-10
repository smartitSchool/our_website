import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewClass = () => {
    return (
        <Card className='card-styles'>
        <FontAwesomeIcon className='facilities-icon' icon={faSchool} />
        <Card.Body>
            <Card.Title>Review Class</Card.Title>
            <Card.Text>
            Ensure 100% learning of tools, techniques, designs by our review classes for each batch. Better understand the difficult terms by revising every topic.
            </Card.Text>
        </Card.Body>
    </Card>
    );
};

export default ReviewClass;
import {faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const JobPlacement = () => {
    return (
        <Card className='card-styles'>
            <FontAwesomeIcon className='facilities-icon' icon={faUserDoctor} />
            <Card.Body>
                <Card.Title>Job Placement</Card.Title>
                <Card.Text>
                Acquire exclusive opportunities to work in international marketplaces as an expert freelancer. CITI creates opportunities by adding value to your career.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default JobPlacement;
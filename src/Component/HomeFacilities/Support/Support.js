import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import './Support.css'

const Support = () => {
    return (
        <Card className='card-styles'>
            <FontAwesomeIcon className='facilities-icon' icon={faLifeRing} />
            <Card.Body>
                <Card.Title>Lifetime Support</Card.Title>
                <Card.Text>
                All CITI students get supports for life. For any live project get our experts' guideline and maintain it in international standard.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Support;
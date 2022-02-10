import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const PractiseLabSupport = () => {
    return (
        <Card className='card-styles'>
            <FontAwesomeIcon className='facilities-icon' icon={faLaptopCode} />
            <Card.Body>
                <Card.Title>Practise Lab Support</Card.Title>
                <Card.Text>
                We offer lab practise facilities for weak students where they can practice the task and be able to hold the attention by solving what is not understood by them.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PractiseLabSupport;
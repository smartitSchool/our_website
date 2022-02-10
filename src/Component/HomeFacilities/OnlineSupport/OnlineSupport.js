import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const OnlineSupport = () => {
    return (
        <Card className='card-styles'>
            <FontAwesomeIcon className='facilities-icon' icon={faHeadset} />
            <Card.Body>
                <Card.Title>24/7 Online Support</Card.Title>
                <Card.Text>
                24/7 Online Support- We always listen to our students. Any time they are in a problem, our team is always online for providing support to them. Even at night, we are online for your projects ongoing.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default OnlineSupport;
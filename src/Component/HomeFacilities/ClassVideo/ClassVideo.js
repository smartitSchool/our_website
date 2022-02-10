import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const ClassVideo = () => {
    return (
        <Card className='card-styles'>
            <FontAwesomeIcon className='facilities-icon' icon={faClapperboard} />
            <Card.Body>
                <Card.Title>Class Video</Card.Title>
                <Card.Text>
                Get the recorded lectures and class practical as video. It will create a good storage of materials for future. And you can practice at home with the help of these materials.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ClassVideo;
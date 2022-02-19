import React from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { course_name, description, fee, id, image } = course;
    return (
        <Row className='my-3 service-container'>
            <Col md={8} sm={12} className='my-4 px-4'>
                <h2 className='fw-bold'>{course_name}</h2>
                <p>{description.slice(0, 100)}</p>
                <h5 className='fw-bold'>Price: {fee} BDT</h5>
                <Link to={`/courseDetails/${id}`}>
                    <Button className='btn-a'>
                        Details
                    </Button>
                </Link>

            </Col>
            <Col md={4} sm={12}>
                <Image src={`http://localhost:8081/${image}`} className='img-fluid my-4' />
            </Col>
        </Row >
    );
};

export default Course;
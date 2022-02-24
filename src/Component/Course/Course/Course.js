import React from 'react';
import { Col,  Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { course_name, description, fee, id, image } = course;
    return (
        <Col xs={12} md={4} sm={6}>
            <div  className='custom-card'>
                <div className="card-thumbnail">
                    <Image src={`http://localhost:8081/${image}`} className='card-img' />
                    <p className='card-price'>Only {fee} BDT</p>
                </div>
                <div className='card-text'>
                    <p className='card-name'>{course_name}</p>
                    <p className=''>{description.slice(0, 100)}</p>
                    
                </div>
                    <div className="custom-card-footer">
                        <Link to={`/courseDetails/${id}`} className='link-b font-size-a'> &#x2771;&#x2771;Read More</Link>
                    </div>
            </div>
        </Col>
    );
};

export default Course;
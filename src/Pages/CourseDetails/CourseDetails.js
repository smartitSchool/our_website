import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import './Course.css'

const CourseDetails = () => {
    const [course, setCourse] = useState({});
    const [tech,setTech]=useState([])
    
    const { id } = useParams();
    useEffect(() => {
            fetch(`http://localhost:8081/api/training/${id}`)
                .then(res => res.json())
                .then(data => {
                    setCourse(data)
                    setTech(data.technologies.split(','))
                })
        }, [id]);
    
   

    
    const { course_name, description, fee, image, total_classes } = course;


    return (
        <div>
            <Header />
            <Container>
                <Row className='my-4'>
                    <Col md={6} xs={12}>
                        <div className='detail-image-container'>
                            <img className='thumbnails' src={`http://localhost:8081/${image}`} alt='' />
                        </div>
                        <div className='tech-list'>
                            {
                                tech.map((singleTech, index) => <p className={index%2===0?'tech-a':'tech-b'}>{singleTech}</p>)
                        }
                        </div>
                        
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>{course_name}</h2>
                        <div className='description-container'>
                            {description}
                        </div>
                        <p className='mt-2 font-size-a fw-bold higlight-style-bg-a'>Total Classes: { total_classes}</p> <br />
                        <p className='fw-bold font-size-a higlight-style-bg-a'>Fee: {fee} BDT</p>
                        <Link to='/admission'>
                            <buton className='wide-btn-fill my-4' >
                                Get Admission
                            </buton>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default CourseDetails;
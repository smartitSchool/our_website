import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const CourseDetails = () => {
    const [course, setCourse] = useState({});
    const { id } = useParams();

    const { course_name, description, fee, image } = course;

    useEffect(() => {
        fetch(`http://localhost:8081/api/training/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [id])


    return (
        <div>
            <Header />
            <Container>
                <Row className='my-4'>
                    <Col md={6} xs={12}>
                        <div className='detail-image-container'>
                            <img className='img-fluid' src={`http://localhost:8081/${image}`} alt='' />
                        </div>
                        {/* <buton className='wide-btn-fill my-4' onClick={() => setModalShow(true)}>
                            Proceed to order
                        </buton> */}
                    </Col>
                    <Col md={6} xs={12} className=''>
                        <h2 className='' >{course_name}</h2>
                        <p>{description}</p>
                        <h5 className='fw-bold'>Price: <span className='color-a'>{fee} BDT</span> </h5>

                    </Col>
                </Row>
                {/* <OrderModal
                    title={title}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
            </Container>
            <Footer />
        </div>
    );
};

export default CourseDetails;
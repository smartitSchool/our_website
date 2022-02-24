import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Course from '../../Component/Course/Course/Course';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/training/allTrainings')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, []);


    const bannerText=['Web Development', 'Graphic Design', 'Auto CAD (2D & 3D)', 'UI/UX Design' ,'Al Quran Training']
    return (
        <>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='Courses'
                imageLink='https://i.ibb.co/6H4zLhm/v796-nunny-03b.jpg'
            />
            <Container className='mb-4'>
                <h2 className='page-heading'><u>Our</u> Courses</h2>
                <Row>
                    {courses.map(course=><Course
                            key={course.id}
                            course={course}
                        />)}    
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Courses;
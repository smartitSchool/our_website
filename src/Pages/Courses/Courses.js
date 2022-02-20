import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            />
            <Container>
                {courses.map(course=><Course
                key={course.id}
                course={course}
                />)}
            </Container>
            <Footer />
        </>
    );
};

export default Courses;
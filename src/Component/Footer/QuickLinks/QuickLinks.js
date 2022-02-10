import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuickLinks.css'

const QuickLinks = () => {
    return (
        <Container>
            <h2 className='color-white'>Quick Links</h2>
            <ul className='list-styles-none'>
                <li>
                    <Link to='/courses' className='menu-item color-white'>
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to='/services' className='menu-item color-white'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/admission' className='menu-item color-white'>
                        Admission
                    </Link>
                </li>
                <li>
                    <Link to='/facilities' className='menu-item color-white'>
                        Facilities
                    </Link>
                </li>
                <li>
                    <Link to='/reviews' className='menu-item color-white'>
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link to='/gallery' className='menu-item color-white'>
                        Gallery
                    </Link>
                </li>
            </ul>
        </Container>
    );
};

export default QuickLinks;
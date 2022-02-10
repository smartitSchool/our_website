import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuickLinks.css'

const QuickLinks = () => {
    return (
        <Container className='my-3'>
            <h2 className='color-a'>Quick Links</h2>
            <ul className='list-styles-none'>
                <li>
                    <Link to='/courses' className='menu-item color-a'>
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to='/services' className='menu-item color-a'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/admission' className='menu-item color-a'>
                        Admission
                    </Link>
                </li>
                <li>
                    <Link to='/facilities' className='menu-item color-a'>
                        Facilities
                    </Link>
                </li>
                <li>
                    <Link to='/reviews' className='menu-item color-a'>
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link to='/gallery' className='menu-item color-a'>
                        Gallery
                    </Link>
                </li>
            </ul>
        </Container>
    );
};

export default QuickLinks;
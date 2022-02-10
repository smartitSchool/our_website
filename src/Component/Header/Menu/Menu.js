import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'




const Menu = () => {
    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' className='menu-item color-white'>Home</Link>
                        <Link to='/about-us' className='menu-item color-white'>About us</Link>
                        <Link to='/courses' className='menu-item color-white'>Courses</Link>
                        <Link to='/services' className='menu-item color-white'>Services</Link>
                        <Link to='/admission' className='menu-item color-white'>Admission</Link>
                        <Link to='/facilities' className='menu-item color-white'>Facilities</Link>
                        <Link to='/reviews' className='menu-item color-white'>Reviews</Link>
                        <Link to='/gallery' className='menu-item color-white'>Gallery</Link>
                        <Link to='/contact' className='menu-item color-white'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css'



const Menu = () => {
    return (
    <Navbar className='navbar' expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/home' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Home</NavLink>
                    <NavLink to='/about-us' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>About us</NavLink>
                    <NavLink to='/courses' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Courses</NavLink>
                    <NavLink to='/services' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Services</NavLink>
                    <NavLink to='/admission' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Admission</NavLink>
                    <NavLink to='/facilities' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Facilities</NavLink>
                    <NavLink to='/reviews' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Reviews</NavLink>
                    <NavLink to='/gallery' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Gallery</NavLink>
                    <NavLink to='/contact' className={(navData) => (navData.isActive ? 'active color-white' : 'menu-item color-white')}>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Menu;
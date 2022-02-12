import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <Container className='d-flex justify-content-center'>
                <Col md={5} className='my-4'>
                    <Form.Control size="md" type="email" placeholder="Email" />
                    <br/>
                    <Form.Control size="md" type="password" placeholder="Password" />

                </Col>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;
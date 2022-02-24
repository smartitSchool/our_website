import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import FooterContact from '../../Component/Footer/FooterContact/FooterContact';
import Header from '../../Component/Header/Header';
import './Contact.css'


const Contact = () => {

    const { reset, register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        alert('We recive your message. Thanks for messaging')
        reset()
    }


    const bannerText=['Give us your suggestion', 'Send Your feedback']

    return (
        <>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='Contact'
                imageLink='https://i.ibb.co/6H4zLhm/v796-nunny-03b.jpg'
            />
            <div className='contact-body'>
                <Container className='py-4'>
                    <Row>
                        <Col xs={12} md={4}>
                            <FooterContact />
                        </Col>
                        <Col xs={12} md={8}>
                            <form onSubmit={handleSubmit(onSubmit)} method='POST' encType='multipart/form-data'>
                                <Row className='mt-4'>
                                    <Col xs={12} md={6}>
                                        <Form.Label> <span className='font-size-a'>Your Name</span> </Form.Label>
                                        <Form.Control {...register("name")} type="text" placeholder="Your Full Name" required />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Label> <span className='font-size-a'>Your Name</span> </Form.Label>
                                        <Form.Control {...register("email")} type="email" placeholder="Your email" required />
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Form.Label><span className='font-size-a'>Your Message</span></Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows='7'
                                        {...register('message')} />
                                    
                                <input type="submit" className='btn mt-4 wide-btn-fill' value="Send" />
                                </Row>
                        </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;
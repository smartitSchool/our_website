import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Culture = () => {
    return (
        <Row className='py-4'>
            <Col xs={12} md={6}>
                <Container>
                    <Image fluid={true} src="https://aie-internship.com/wp-content/uploads/Co-workers-working-in-start-up-office.jpg" />
                </Container>
            </Col>
            <Col xs={12} md={6}>
                <p className='font-size-a'>
                    We have developed our brilliant team of designers, developers, and marketers to flourish in making the future leaders. We encourage personal projects for getting trendy arts and to continuously progress with the innovative world. We value the innovative ideas and work in a dynamic lifestyle. Thus we are passionate towards uplifting new opportunities for the country. And we always prioritize to work in a friendly environment where time off and interaction with our team helps us to be together and to learn new stuffs.
                </p>
            </Col>
        </Row>
    );
};

export default Culture;
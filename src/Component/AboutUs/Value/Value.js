import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Value = () => {
    return (
        <Row className='py-4'>
            <Col xs={12} md={6}>
                <p className='font-size-a'>
                    Passion for Continuous Improvement - As an ever growing IT institute, we always cherish passion for continuous improvement of our quality. This passion has been enabling us to meet the ever-changing needs of the market by providing the upgraded skills.
                    Fostering Leadership -Through an unmatched way of skills development, we foster leadership in a wide range of fields. Our students are keeping their footprints of leadership in their career and business.
                    Enhancing Innovations - Innovations is not just a word to us, rather it's what we feel thrilled with. We always keep an eye on the changes and come up with innovative ideas to meet the newer thirst of the world.
                    Cherishing Integrity - Integrity is what we maintain in all our day-to-day activities. It keeps us in the right direction in achieving the ultimate goal.
                </p>
            </Col>
            <Col xs={12} md={6}>
                <Container>
                    <Image fluid={true} src="https://aie-internship.com/wp-content/uploads/Co-workers-working-in-start-up-office.jpg" />
                </Container>
            </Col>
        </Row>
    );
};

export default Value;
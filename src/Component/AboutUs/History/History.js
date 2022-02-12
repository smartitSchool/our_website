import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const History = () => {
    return (
        <Row className='py-4'>
            <Col xs={12} md={6}>
            <Container>
                    <Image fluid={true} src="https://aie-internship.com/wp-content/uploads/Co-workers-working-in-start-up-office.jpg" />
                </Container>
            </Col>
            <Col xs={12} md={6}>
            <p  className='font-size-a text-justify'>
            Smart IT School is started its journey since 2008 and it's providing training facilities for IT skill enhancement. The institution is founded by Mr. Monir Hosen, who as a young talent wanted to make the language of IT world easier by creating leaders and by contributing in the success of individuals. So to bring it into reality it has started the journey with a motto of growing, meeting emerging needs and now it becomes one of the successful IT institute in Bangladesh. We are involved with Government entities like Election Commission, BEZA, BEPZA, Prison, NFE, LGED, BCC and ICT Ministry. We have been working with outsourcing market for graduating under Bangladesh Hi-Tech Park Authority. We are always sticking to the newest trends in providing IT training professionals. This wind of developing careers of individuals and making it successful in the international arena is still going on. Till now we have achieved remarkable success and expecting to go a long run in this beautiful journey.
            </p>
            </Col>
        </Row>
    );
};

export default History;
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Mission = () => {
    return (
        <Row className='py-4'>
            <Col xs={12} md={6}>
                <ul className='list-style-a font-size-a'>
                    <li>To empower the community by ensuring state of the art method which strengthens the belief in quality learning.</li>
                    <li>To raise opportunities and growth by broadening the areas and possibilities for our future leaders.</li>
                    <li>To connect best selected human resource for delivering standard values that supports leaders to flourish.</li>
                    <li>To utilize the power of youth by serving and meeting the emerging needs both in local and global network.</li>
                    <li>To reduce inequalities for the best interest of the society by creating international array of excellence. </li>
                </ul>
            </Col>
            <Col xs={12} md={6}>
                <Container>
                    <Image fluid={true} src="https://aie-internship.com/wp-content/uploads/Co-workers-working-in-start-up-office.jpg" />
                </Container>
            </Col>
        </Row>
    );
};

export default Mission;
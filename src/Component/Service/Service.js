import React from 'react';
import parse from 'html-react-parser';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, description, price, id, image } = service;
    const html = '<p>Siam</p>'
    return (
        <Col xs={12} md={4} sm={6}>
            <div className='custom-card'>
                <div className="card-thumbnail">
                    <Image src={`http://localhost:8081/${image}`} className='card-img' />
                    <p className='card-price'>Price: {price} BDT</p>
                </div>
                <div className='card-text'>
                    <p className='card-name'>{title}</p>
                    <div>
                        {
                            parse(description.slice(0, 50))
                        }
                    </div>
                    {/* {
                        parse('<br>', {
                            replace: domNode => {
                                console.dir(domNode, { depth: null });
                            }
                        })
                    } */}

                </div>
                <div className="custom-card-footer">
                    <Link to={`/details/${id}`} className='link-b font-size-a'> &#x2771;&#x2771;Read More</Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;
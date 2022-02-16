import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const axios = require('axios').default;



const OrderModal = (props) => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from || '/services';


    // place order
    const onSubmit = data => {
        handlePlaceOrder(data)
        props.onHide();
        reset()
        
    };


    // handle order
    const handlePlaceOrder = (customerInfo) => {
        const orderInfo={...customerInfo, order_status:'Pending'}
        axios.post('http://localhost:8081/api/order/addOrder', orderInfo)
        .then(res=>{
            if (res.status===200) {
                alert('Placed your order');
                navigate(url);
            }
        })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your Informations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Please fiil this up.</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control  {...register("service_name")} size="md" type="text" value={props.title} />
                    <br />
                    <Form.Control  {...register("customer_name")} size="md" type="text" value={user?.displayName} />
                    <br />
                    <Form.Control {...register("customer_email")} size="md" type="email" placeholder="Email" value={user?.email} />
                    <br />
                    <Form.Control  {...register("customer_contact")} required size="md" type="tel" min='11' max='14' placeholder="Your Current Contact No" />
                    <br />
                    <Form.Control
                        {...register("order_message")}
                        as="textarea"
                        placeholder="Write your messege (if you have any query or need any customization with this package)"
                        style={{ height: '100px' }}
                    />
                    <hr />
                    <Button type='submit'>Place Order</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default OrderModal;
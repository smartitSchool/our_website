import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { registerUser, updateDisplayName, setUser, setError, googleSignin } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        handleRegister(email, password, name)
        reset();
        alert('Registration Success')
    };



    const handleRegister = (email, password, name) => {
        registerUser(email, password, name)
            .then((result) => {
                const user = result.user;
                updateDisplayName(name);
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }




    // google login
    const handleGoogleLogin = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div>
            <Header />
            <Container className='d-flex justify-content-center'>
                <Col md={5} className='my-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control {...register("name")} size="md" type="text" placeholder="Full Name" />
                        <br />
                        <Form.Control {...register("email")} size="md" type="email" placeholder="Email" />
                        <br />
                        <Form.Control {...register("password")} size="md" type="password" placeholder="Password" />
                        <Button type='submit' className='btn btn-a my-4'>Register</Button>
                    </form>
                    <Button onClick={() => handleGoogleLogin()}>Register using Google</Button>
                </Col>
            </Container>
            <Footer />
        </div>
    );
};

export default Register;
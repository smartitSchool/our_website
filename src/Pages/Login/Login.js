import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from || '/home';


    const { loginUser, setUser, setError, googleSignin } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        handleLogin(email, password)
        reset()
        alert('Succesfully logged in')
        navigate(url);

    };


    // menual login
    const handleLogin = (email, password) => {
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
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
                        <Form.Control {...register("email")} size="md" type="email" placeholder="Email" />
                        <br />
                        <Form.Control {...register("password")} size="md" type="password" placeholder="Password" />
                        <Button type='submit' className='btn btn-a my-4'>Login</Button>
                    </form>
                    <Button onClick={() => handleGoogleLogin()}>Login using Google</Button>

                </Col>
            </Container>
            <div className='text-center mb-4'>
                <sapn>Already have an account?</sapn>
                <Link to='/register'> Please Register</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
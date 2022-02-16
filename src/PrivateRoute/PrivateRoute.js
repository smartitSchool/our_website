import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center alig-items-center' >
                <Button className='btn-a' disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        )

    }
    else {
        return user.email ? children : <Navigate to='/login' />
    }
};

export default PrivateRoute;
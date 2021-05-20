import React from 'react';
import LoginForm from './LoginForm';

const LoginWrapper = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default LoginWrapper;
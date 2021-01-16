import React from 'react';
import {Link} from 'react-router-dom';

export default function loginScreen() {
    return (
        <div>
            <form className="form">
                <h1>Sign in</h1>
            </form>
            <p>Need a customer account? <Link to="/userRegister">Register Here</Link></p>
            <p>Need a business account? <Link to="/sellerRegister">Register Here</Link></p>
        </div>
    )
}
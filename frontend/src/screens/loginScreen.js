import React from 'react';
import {Link} from 'react-router-dom';

export default function loginScreen() {
    return (
        <form className="form">
            <div className = "backround">
                 <h1>Sign in</h1>
                <div className = "passAndUserText">
                        <p>Username or Email Address</p>
                        <input></input>
                        <br></br>
                        <p>Password</p>
                        <input></input>
                        <br></br>
                </div>
                <Link to="/homeScreen"><button className = "loginButton">Log In</button></Link>
                <h3>Need a customer account?</h3>
                <p className = "account"><Link to="/userRegister">Register Here</Link></p>
                <h3>Need a business account?</h3>
                <p className = "account"><Link to="/sellerRegister">Register Here</Link></p>
            </div>
        </form>
    )
}
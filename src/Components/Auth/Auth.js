import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const AuthModule = () => {
    return (
        <div className="container">
            <h1 className="title">Welcome to the Feature 5 Kickoff</h1>
            <hr className="divider" />
            <Link to="/login" className="link">
                <button className="button">LogIn</button>
            </Link>
            <Link to="/register" className="link">
                <button className="button">Register</button>
            </Link>
            <p className="instructions">To test the functionality, use "mofra@nd.edu" as the username and "mofra" as password.</p>
        </div>
    );
};

export default AuthModule;
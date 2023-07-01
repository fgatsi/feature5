import React, { useState } from "react";
import Parse from 'parse';
import { useNavigate } from "react-router-dom";
import redirect from "../Redirect";
import "./AuthLogin.css";

const AuthLogin = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Parse.User.logIn(username, password);
            navigate("/Main");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <>
        <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
            </label>
            <label className="login-label">
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
            </label>
            <button type="submit" className="login-button">Log In</button>
            {/* <button type="submit" className="login-button" 
            onClick={() => props.onFormSwitch('register')}>Log In</button> */}
        </form>
        {/* <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
    </>   
    );
};

export default AuthLogin;

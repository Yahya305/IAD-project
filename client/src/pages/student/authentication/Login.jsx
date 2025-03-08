import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./style.css";

const Loginpage = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/student/signup");
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Welcome Back!</h1>
                <h2>Login</h2>
                <LoginForm />
                <p className="form-footer">
                    Don't have an account?{" "}
                    <span onClick={handleSignup} className="signup-login-link">
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Loginpage;

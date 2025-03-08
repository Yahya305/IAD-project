import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import SignupForm from "./components/SignupForm";

const Signup = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/student/login");
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Enroll Now</h1>
                <h2>Signup</h2>
                <SignupForm />
                <p className="form-footer">
                    Already have an account?{" "}
                    <span onClick={handleLogin} className="signup-login-link">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./style.css";
import apiClient from "../../../config/apiClient";
import toast  from "react-hot-toast"

const Loginpage = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/student/signup");
    };

    const handleSubmit = async ({ email, password }) => {
        const res=await apiClient.post("/auth/login", { email, password });
        const user= res.data;
        console.log(user);
        toast.success("Login Successful.")
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Welcome Back!</h1>
                <h2>Login</h2>
                <LoginForm onSubmit={handleSubmit} />
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

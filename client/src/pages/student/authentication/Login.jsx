import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./style.css";
import apiClient from "../../../config/apiClient";
import toast from "../../../components/CustomToast/toast";
import useUserStore from "../../../store/userStore";
import { AxiosError } from "axios";

const Loginpage = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUserStore();

    useEffect(() => {
        // console.log(user, "-=-=-=-=");
    }, []);

    const handleSignup = () => {
        navigate("/student/signup");
    };

    const handleSubmit = async ({ email, password }) => {
        try {
            const res = await apiClient.post("/auth/login", {
                email,
                password,
            });
            const fetchedUser = res.data;
            setUser({ ...fetchedUser, userType: "STUDENT" });
            localStorage.setItem("token", fetchedUser.token);
            toast.success({
                title: "Success",
                description: "Login Successful.",
            });
            navigate("/student/dashboard");
        } catch (err) {
            if (err instanceof AxiosError) {
                toast.error({
                    title: "Error",
                    description: err.response?.data.message.code
                        ? err.response?.data.message.message
                        : err.response?.data.message,
                });
            } else {
                console.log(err);
                toast.error({
                    title: "Error",
                    description: "Internal Server Error.",
                });
            }
        }
    };

    return (
        <div className="auth-page-container">
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

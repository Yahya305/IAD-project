import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import apiClient from "../../../config/apiClient";
import toast from "../../../components/CustomToast/toast";
import useUserStore from "../../../store/userStore";
import { AxiosError } from "axios";
import Form from "./components/Form";

const TeacherLoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();

    const handleSubmit = async ({ email, password }) => {
        try {
            const res = await apiClient.post("/auth/admin-login", {
                email,
                password,
            });
            const fetchedUser = res.data;
            setUser({ ...fetchedUser, userType: "INSTRUCTOR" });
            localStorage.setItem("token", fetchedUser.token);
            toast.success({
                title: "Success",
                description: "Login Successful",
            });
            navigate("/teacher/dashboard");
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
                    description: "Internal Server Error",
                });
            }
        }
    };

    return (
        <div className="auth-page-container">
            <div className="form-container">
                <h1>Welcome Back, Teacher!</h1>
                <h2>Login to Your Dashboard</h2>
                <Form onSubmit={handleSubmit} formType="Login" />
                <p className="form-footer">
                    Need help? Contact the administrator
                </p>
            </div>
        </div>
    );
};

export default TeacherLoginPage; 
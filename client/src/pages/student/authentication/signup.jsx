import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import OTPVerification from "./components/OTPVerification";
import { AxiosError } from "axios";
import toast from "../../../components/CustomToast/toast";
import apiClient from "../../../config/apiClient";
import useUserStore from "../../../store/userStore";
import Form from "./components/Form";

const Signup = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [credentials, setCredentials] = useState(null);

    const handleLogin = () => {
        navigate("/student/login");
    };

    const initiateSignup = async (formData) => {
        try {
            await apiClient.post("/auth/initiate-signup", {
                email: formData.email,
                seatNo: formData.seatNo,
            });
            setCredentials(formData);
            setShowOTPVerification(true);
            toast.success({
                title: "OTP Sent",
                description:
                    "Please check your email for the verification code.",
            });
        } catch (err) {
            handleError(err);
        }
    };

    const handleOTPVerification = async (otp) => {
        try {
            const res = await apiClient.post("/auth/signup", {
                email: credentials.email,
                seatNo: credentials.seatNo,
                password: credentials.password,
                otp,
            });
            const fetchedUser = res.data;
            setUser({ ...fetchedUser, userType: "STUDENT" });
            localStorage.setItem("token", fetchedUser.token);
            toast.success({
                title: "Success",
                description: "Signup Successful.",
            });
            navigate("/student/dashboard");
        } catch (err) {
            handleError(err);
        }
    };

    const handleResendOTP = async () => {
        try {
            await apiClient.post("/auth/initiate-signup", {
                email: credentials.email,
                seatNo: credentials.seatNo,
            });
            toast.success({
                title: "OTP Resent",
                description:
                    "A new verification code has been sent to your email.",
            });
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (err) => {
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
    };

    return (
        <div className="auth-page-container">
            {!showOTPVerification && (
                <div className="image-container">
                    <figure>
                        <img src={"/src/assets/login.jpg"} alt="login-image" />
                    </figure>
                </div>
            )}
            <div className="form-container">
                <h1>Enroll Now</h1>
                <h2>Signup</h2>
                {showOTPVerification ? (
                    <OTPVerification
                        email={credentials.email}
                        onVerify={handleOTPVerification}
                        onResendOTP={handleResendOTP}
                    />
                ) : (
                    <>
                        <Form onSubmit={initiateSignup} formType="Signup" />
                        <p className="form-footer">
                            Already have an account?{" "}
                            <span
                                onClick={handleLogin}
                                className="signup-login-link"
                            >
                                Login
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Signup;

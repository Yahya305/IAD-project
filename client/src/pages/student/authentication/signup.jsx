import { useNavigate } from "react-router-dom";
import "./style.css";
import SignupForm from "./components/SignupForm";
import { AxiosError } from "axios";
import toast from "../../../components/CustomToast/toast";
import apiClient from "../../../config/apiClient";
import useUserStore from "../../../store/userStore";

const Signup = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();

    const handleLogin = () => {
        navigate("/student/login");
    };

    const handleSubmit = async ({ email, seatNo, password }) => {
        try {
            const res = await apiClient.post("/auth/signup", {
                email,
                seatNo,
                password,
            });
            const fetchedUser = res.data;
            setUser({ ...fetchedUser, userType: "STUDENT" });
            toast.success({ title: "Success", description: "Signup Successful." });
            navigate("/student/dashboard");
        } catch (err) {
            if (err instanceof AxiosError) {
                toast.error({
                    title: "Error",
                    description: err.response?.data.message.code
                        ? err.response?.data.message.message
                        : err.response?.data.message
                });
            } else {
                console.log(err);
                toast.error({ title: "Error", description: "Internal Server Error." });
            }
        }
    };

    return (
        <div className="auth-page-container">
            <div className="form-container">
                <h1>Enroll Now</h1>
                <h2>Signup</h2>
                <SignupForm onSubmit={handleSubmit} />
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

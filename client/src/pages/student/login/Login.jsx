import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
    };

    const handleSignup = () => {
        navigate("/student/signup"); // Navigate to the signup page
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Welcome Back!</h1>
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="signup-login-link">
                    Don't have an account?{" "}
                    <span
                        onClick={handleSignup}
                        style={{
                            cursor: "pointer",
                            color: "#033452",
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}

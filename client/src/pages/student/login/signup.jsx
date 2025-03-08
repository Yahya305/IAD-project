import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seatnum, setSeatno] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
    };

    const handlelogin = (e) => {
        e.preventDefault();
        navigate("/student/login");
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Enroll Now</h1>
                <h2>Signup</h2>
                <form className="form">
                    <input type="text" placeholder="Name" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Seat Number"
                        value={seatnum}
                        onChange={(e) => setSeatno(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Signup</button>
                </form>
                <p className="signup-login-link">
                    Already have an account?{" "}
                    <span
                        onClick={handlelogin}
                        style={{
                            cursor: "pointer",
                            color: "#033452",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

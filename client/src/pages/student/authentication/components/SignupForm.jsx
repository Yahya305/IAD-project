import React, { useState } from "react";

const SignupForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seatNo, setSeatno] = useState("");
    const [section, setSection] = useState(""); // Default value for section
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !name ||
            !email ||
            !seatNo ||
            !section ||
            !password ||
            !confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Clear error on successful validation
        setError("");

        // Call the onSubmit prop if provided
        if (onSubmit) {
            onSubmit({ name, email, seatNo, section, password });
        }

        console.log("Signing up with:", {
            name,
            email,
            seatNo,
            section,
            password,
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Name"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Seat Number"
                    value={seatNo}
                    onChange={(e) => setSeatno(e.target.value)}
                    aria-label="Seat Number"
                />
            </div>
            <div className="form-group">
                <select
                    id="section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    aria-label="Section"
                >
                    <option value="">Choose Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
            </div>
            <div className="form-group">
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                />
            </div>
            <div className="form-group">
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                />
            </div>
            <div className="form-group">
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    aria-label="Confirm Password"
                />
            </div>
            <button type="submit" className="submit-button">
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;

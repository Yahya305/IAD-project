import React, { useState } from "react";

const Form = ({ onSubmit, formType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formType === "Signup" && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Basic validation
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // Clear error on successful validation
        setError("");

        // Call the onSubmit prop if provided
        if (onSubmit) {
            onSubmit({ email, password });
        }

        console.log("Logging in with", email, password);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
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
            {formType === "Signup" && (
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
            )}
            <button type="submit" className="submit-button">
                {formType}
            </button>
        </form>
    );
};

export default Form;

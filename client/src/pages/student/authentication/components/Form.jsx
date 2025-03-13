import React, { useState } from "react";

const Form = ({ onSubmit, formType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // Clear error on successful validation
        setError("");

        // Call the onSubmit prop if provided
        if (onSubmit) {
            onSubmit({email, password});
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
            <button type="submit" className="submit-button">
                {formType}
            </button>
        </form>
    );
};

export default Form;

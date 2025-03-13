import { useState } from "react";

const OTPVerification = ({ onVerify, onResendOTP, email }) => {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerify(otp);
    };

    return (
        <div className="otp-verification-container">
            <h3>OTP Verification</h3>
            <p>
                We've sent a verification code to <strong>{email}</strong>
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Verify OTP
                </button>
            </form>
            <p className="resend-text">
                Didn't receive the code?{" "}
                <span onClick={onResendOTP} className="resend-link">
                    Resend OTP
                </span>
            </p>
        </div>
    );
};

export default OTPVerification;

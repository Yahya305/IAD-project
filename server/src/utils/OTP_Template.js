export const generateOTPemailTemplate = (otp) => {
    const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f8f9fa;
                        }
                        .header {
                            background-color: #007bff;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            background-color: white;
                            padding: 20px;
                            border-radius: 0 0 5px 5px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .otp-code {
                            font-size: 32px;
                            font-weight: bold;
                            color: #007bff;
                            text-align: center;
                            padding: 20px;
                            margin: 20px 0;
                            background-color: #f8f9fa;
                            border-radius: 5px;
                            letter-spacing: 2px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            font-size: 12px;
                            color: #666666;
                        }
                        .warning {
                            color: #dc3545;
                            font-size: 14px;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>OTP Verification Code</h2>
                        </div>
                        <div class="content">
                            <p>Hello,</p>
                            <p>Your one-time password (OTP) for verification is:</p>
                            <div class="otp-code">${otp}</div>
                            <p>This code will expire in <strong>10 minutes</strong>.</p>
                            <p class="warning">If you did not request this code, please ignore this email and ensure your account security.</p>
                            <div class="footer">
                                <p>This is an automated message, please do not reply to this email.</p>
                                <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;
    return html;
};

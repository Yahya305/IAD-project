import nodemailer from "nodemailer";
import { generateOTPemailTemplate } from "../utils/OTP_Template.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class NodemailerService {
    static async sendEmail(to, subject, text, html) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        try {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to,
                subject,
                text, // Fallback plain text
                html, // HTML version
            };

            const info = await transporter.sendMail(mailOptions);
            return {
                success: true,
                messageId: info.messageId,
            };
        } catch (error) {
            throw new CustomError(
                "Error Sending Email",
                HttpStatusCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    static async sendOTP(to, otp) {
        try {
            const subject = "Your OTP Verification Code";
            const text = `Your OTP verification code is: ${otp}\n\nThis code will expire in 10 minutes.\nIf you did not request this code, please ignore this email.`; // Fallback plain text

            const html = generateOTPemailTemplate(otp);

            await this.sendEmail(to, subject, text, html);

            return {
                success: true,
            };
        } catch (error) {
            console.error("Error sending OTP:", error);
            throw new CustomError(
                "Failed to send OTP: ",
                HttpStatusCode.INTERNAL_SERVER_ERROR
            );
        }
    }
}

export default NodemailerService;

import prisma from "../config/prismaConfig.js";

class OTPRepository {
    static async saveOTP(email, expiresAt, otpValue) {
        // Delete any existing OTP for this email first
        await prisma.oTP.deleteMany({
            where: { email }
        });

        // Create new OTP
        const otp = await prisma.oTP.create({
            data: { 
                email,
                expiresAt,
                otp: otpValue
            },
        });
        return otp;
    }
    static async fetchOTP(email) {
        const otp = await prisma.oTP.findUnique({
            where: { email },
        });
        return otp;
    }
}

export default OTPRepository;

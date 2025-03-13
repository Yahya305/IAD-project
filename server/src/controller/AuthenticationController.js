import AuthenticationService from "../service/AuthenticationService.js";

class AuthenticationController {
    static async initiateSignup(req) {
        const { email } = req.body;
        return await AuthenticationService.initiateSignup(email);
    }
    static async teacherLogin(req) {
        const { email, password } = req.body;
        return await AuthenticationService.teacherLogin({ email, password });
    }
    static async studentRegister(req) {
        const { email, password, otp } = req.body;
        return await AuthenticationService.studentRegister({ email, password, otp });
    }
    static async studentLogin(req) {
        const { email, password } = req.body;
        return await AuthenticationService.studentLogin({ email, password });
    }
}
export default AuthenticationController;

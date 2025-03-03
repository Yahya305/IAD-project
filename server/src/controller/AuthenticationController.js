import AuthenticationService from "../service/AuthenticationService.js";

class AuthenticationController {
    static async teacherLogin(req) {
        const { email, password } = req.body;
        return await AuthenticationService.teacherLogin({ email, password });
    }
    static async studentRegister(req) {
        const { seatNo, email, password } = req.body;
        return await AuthenticationService.studentRegister({ seatNo, email, password });
    }
    static async studentLogin(req) {
        const { email, password } = req.body;
        return await AuthenticationService.studentLogin({ email, password });
    }
}
export default AuthenticationController;

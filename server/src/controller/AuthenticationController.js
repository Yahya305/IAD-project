import AuthenticationService from "../service/AuthenticationService.js";

class AuthenticationController {
    async teacherLogin(req) {
        const { email, password } = req.body;


        return await AuthenticationService.teacherLogin({email,password});
    }
}
export default new AuthenticationController();

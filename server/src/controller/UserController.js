
class UserController {
    static async fetchUser(req) {
        const user = req.user;
        return user;
    }
}
export default UserController;

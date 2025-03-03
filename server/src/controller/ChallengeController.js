import ChallengeService from "../service/ChallengeService.js";

class ChallengeController {
    static async fetchAllChallenges(req) {
        const { email, password } = req.body;
        return await ChallengeService.fetchAllChallenges({ email, password });
    }
}
export default ChallengeController;

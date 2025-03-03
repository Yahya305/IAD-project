import ChallengeService from "../service/ChallengeService.js";

class ChallengeController {
    static async fetchAllChallenges(req) {
        const { email, password } = req.body;
        return await ChallengeService.fetchAllChallenges({ email, password });
    }
    static async startChallengeRound(req) {
        const { challengeName, endDate } = req.body;
        return await ChallengeService.startChallengeRound({ challengeName, endDate });
    }
}
export default ChallengeController;

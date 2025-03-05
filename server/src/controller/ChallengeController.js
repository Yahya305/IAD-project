import ChallengeService from "../service/ChallengeService.js";

class ChallengeController {
    static async fetchAllChallenges() {
        return await ChallengeService.fetchAllChallenges();
    }
    static async fetchCompetitionAllChallenges() {
        const { competitionId } = req.body;
        return await ChallengeService.fetchCompetitionAllChallenges(
            competitionId
        );
    }
    static async startChallengeRound(req) {
        const { challengeName, endDate, competitionId } = req.body;
        return await ChallengeService.startChallengeRound({
            challengeName,
            endDate,
            competitionId,
        });
    }
}
export default ChallengeController;

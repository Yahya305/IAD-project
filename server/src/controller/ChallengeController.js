import ChallengeService from "../service/ChallengeService.js";

class ChallengeController {
    static async fetchAllChallengesInCompetition(req) {
        const { competitionId } = req.params;
        return await ChallengeService.fetchAllChallengesInCompetition({ competitionId });
    }
    static async startChallengeRound(req) {
        const { name, description, competitionId, teamIds } = req.body;
        return await ChallengeService.startChallengeRound({
            name, description, competitionId, teamIds
        });
    }
}
export default ChallengeController;

import ChallengeService from "../service/ChallengeService.js";

class ChallengeController {
    static async fetchAllSubmissions(req) {
        const { section, offset, size } = req.query;
        return await ChallengeService.fetchAllSubmissions({
            section,
            offset: +offset,
            size: +size,
        });
    }

    static async fetchAllChallengesInCompetition(req) {
        const { competitionId } = req.params;
        return await ChallengeService.fetchAllChallengesInCompetition({
            competitionId,
        });
    }
    static async fetchAllAssignedChallenges(req) {
        const { teamId } = req.user;
        return await ChallengeService.fetchAllAssignedChallenges(teamId);
    }
    static async startChallengeRound(req) {
        const { name, description, competitionId, teamA, teamB, deadline } =
            req.body;
        return await ChallengeService.startChallengeRound({
            name,
            description,
            competitionId,
            teamIds: [teamA, teamB],
            deadline,
        });
    }

    static async submitProject(req) {
        const { title, description, projectURL, challengeId } = req.body;

        const { teamId } = req.user;
        return await ChallengeService.submitProject({
            title,
            description,
            projectURL,
            challengeId,
            teamId,
        });
    }
}
export default ChallengeController;

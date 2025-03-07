import ChallengeRepository from "../repo/ChallengeRepository.js";
import TeamRepository from "../repo/TeamsRepository.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class ChallengeService {
    static async fetchAllChallengesInCompetition({ competitionId }) {
        const challenges = await ChallengeRepository.fetchChallenges({
            competitionId,
        });

        return challenges;
    }
    static async startChallengeRound({
        name,
        description,
        competitionId,
        teamIds,
    }) {
        // check if teams exist
        const existingTeams = await TeamRepository.findManyTeams(teamIds);

        if (existingTeams.length !== teamIds.length) {
            throw new CustomError(
                "One or more teams do not exist.",
                HttpStatusCode.NOT_FOUND
            );
        }

        const challenge = await ChallengeRepository.createChallenge({
            name,
            description,
            competitionId,
            teamIds,
        });
        return challenge;
    }
}
export default ChallengeService;

import ChallengeRepository from "../repo/ChallengeRepository.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class ChallengeService {
    static async fetchAllChallenges() {
        const challenges = await ChallengeRepository.fetchAllChallenges();
        return challenges;
    }
    static async fetchCompetitionAllChallenges(competitionId) {
        const challenges =
            await ChallengeRepository.fetchCompetitionAllChallenges(
                competitionId
            );
        return challenges;
    }
    static async startChallengeRound({
        challengeName,
        endDate,
        competitionId,
    }) {
        const today = new Date().toISOString(); // Get current date in ISO 8601 format

        if (new Date(endDate) < new Date(today)) {
            throw new CustomError("Invalid Date", HttpStatusCode.BAD_REQUEST);
        }

        const challenge = await ChallengeRepository.createChallenge({
            challengeName,
            endDate,
            competitionId,
        });
        return challenge;
    }
}
export default ChallengeService;

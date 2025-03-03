import ChallengeRepository from "../repo/ChallengeRepository.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class ChallengeService {
    static async fetchAllChallenges({ email, password }) {
        const challenges = await ChallengeRepository.fetchAllChallenges();

        return challenges;
    }
}
export default ChallengeService;

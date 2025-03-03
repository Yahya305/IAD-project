import prisma from "../config/prismaConfig.js";

class ChallengeRepository {
    static async fetchAllChallenges() {
        const challenges = await prisma.challenge.findMany({});
        return challenges;
    }
}

export default ChallengeRepository;

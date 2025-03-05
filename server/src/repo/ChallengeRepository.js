import prisma from "../config/prismaConfig.js";

class ChallengeRepository {
    static async fetchAllChallenges() {
        const challenges = await prisma.challenge.findMany({});
        return challenges;
    }
    static async createChallenge({ challengeName, endDate, competitionId }) {
        const challenge = await prisma.challenge.create({
            data: { challengeName, endDate, competitionId },
        });
        return challenge;
    }
}

export default ChallengeRepository;

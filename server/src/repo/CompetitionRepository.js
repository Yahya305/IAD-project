import prisma from "../config/prismaConfig.js";

export class CompetitionRepository {
    static async createCompetition(competitionName) {
        const competition = await prisma.competition.create({
            data: { competitionName },
        });
        return competition;
    }
    static async fetchCompetitions() {
        const competitions = await prisma.competition.findMany();
        return competitions;
    }
}

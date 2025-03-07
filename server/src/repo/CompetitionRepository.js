import prisma from "../config/prismaConfig.js";

export class CompetitionRepository {
    static async createCompetition({ competitionName, section, endDate }) {
        const competition = await prisma.competition.create({
            data: { competitionName, section, endDate },
        });
        return competition;
    }
    static async fetchCompetitions() {
        const competitions = await prisma.competition.findMany();
        return competitions;
    }
}

import prisma from "../config/prismaConfig.js";

class TeamRepository {
    static async findManyTeams(teamIds) {
        const teams = await prisma.team.findMany({
            where: { teamId: { in: teamIds } },
        });
        return teams;
    }
    static async fetchTeamById(teamId) {
        const team = await prisma.team.findUnique({
            where: { teamId },
        });
        return team;
    }
}

export default TeamRepository;

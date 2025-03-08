import { CompetitionRepository } from "../repo/CompetitionRepository.js";

export class CompetitionService {
    static async createCompitition({ competitionName, section, endDate }) {
        const competition = await CompetitionRepository.createCompetition({
            competitionName,
            section,
            endDate,
        });
        return competition;
    }
    static async fetchCompetitions() {
        const competitions = await CompetitionRepository.fetchCompetitions();
        return competitions;
    }
}

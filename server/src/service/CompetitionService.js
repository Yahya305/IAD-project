import { CompetitionRepository } from "../repo/CompetitionRepository";

export class CompetitionService {
    static async createCompitition(competitionName) {
        const competition = await CompetitionRepository.createCompetition(
            competitionName
        );
        return competition;
    }
    static async fetchCompetitions() {
        const competitions = await CompetitionRepository.fetchCompetitions();
        return competitions;
    }
}

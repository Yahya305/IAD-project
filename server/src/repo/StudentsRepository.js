import prisma from "../config/prismaConfig.js";

class StudentRepository {
    static async fetchStudentByEmail(email) {
        const student = await prisma.student.findUnique({ where: { email } });
        return student;
    }

    static async fetchStudentBySeatNo(seatNo) {
        const student = await prisma.student.findUnique({ where: { seatNo } });
        return student;
    }

    static async areStudentsSeeded() {
        const count = await prisma.student.count();
        return count !== 0;
    }

    static async activateStudentAccount({ seatNo, email, password }) {
        const activatedStudentAccount = await prisma.student.update({
            where: {
                seatNo,
            },
            data: { email, password, isActivated: true },
        });
        return activatedStudentAccount;
    }

    static async seedStudentsAndAssignTeams(studentsData) {
        try {
            // Group students by teamId
            const teamsMap = new Map();

            for (const student of studentsData) {
                const teamId = student.teamId; // e.g., "9B"
                if (!teamsMap.has(teamId)) {
                    teamsMap.set(teamId, []);
                }
                teamsMap.get(teamId).push(student);
            }

            // Create teams and assign students
            for (const [teamId, students] of teamsMap.entries()) {
                const teamNumber = parseInt(teamId.slice(0, -1)); // Extract team number (e.g., "9" from "9B")
                const section = teamId.slice(-1); // Extract section (e.g., "B" from "9B")

                // Create or find the team
                const team = await prisma.team.upsert({
                    where: { teamId }, // Use teamId as the unique identifier
                    update: {}, // Do nothing if team already exists
                    create: {
                        teamId,
                        teamNumber,
                        section,
                    },
                });

                // Create students and assign them to the team
                for (const student of students) {
                    await prisma.student.upsert({
                        where: { seatNo: student.seatNo }, // Ensure uniqueness by seatNo
                        update: {
                            teamId: team.teamId, // Update teamId if student already exists
                        },
                        create: {
                            seatNo: student.seatNo,
                            name: student.name,
                            section: student.section,
                            teamId: team.teamId, // Assign student to the team
                        },
                    });
                }
            }

            console.log("Students and teams seeded successfully.");
        } catch (error) {
            console.error("Error seeding students and teams:", error);
        }
    }
}

export default StudentRepository;

import StudentRepository from "../repo/StudentsRepository";
import fs from "fs";
import csv from "csv-parser";
import TeacherService from "../service/TeacherService";
import TeacherRepository from "../repo/TeacherRepository";

export class Initializer {
    static async init() {
        await Initializer.initStudentData();
        await Initializer.initTeacherAccount();
    }
    static initStudentData = async () => {
        const seeded = await StudentRepository.areStudentsSeeded();
        if (seeded) {
            return;
        }

        const studentsData = [];

        // Read the CSV file
        fs.createReadStream("src/data/students.csv")
            .pipe(csv())
            .on("data", (row) => {
                // Map CSV data to Student model
                const student = {
                    seatNo: row.SeatNo,
                    name: row.Name,
                    section: row.Section,
                    teamNumber: parseInt(row.Team), // Parse team number from CSV
                    teamId: `${row.Team}${row.Section}`, // Generate teamId (e.g., "9B")
                };
                studentsData.push(student);
            })
            .on("end", async () => {
                console.log(
                    "CSV file successfully processed. Seeding Students Data..."
                );

                await StudentRepository.seedStudentsAndAssignTeams(
                    studentsData
                );
            });
    };

    static async initTeacherAccount() {
        const teacher = await TeacherService.fetchTeacher();
        if (!teacher) {
            await TeacherRepository.createTeacher(
                "Dr Humera Tariq",
                process.env.TEACHER_EMAIL,
                process.env.TEACHER_PASSWORD
            );
        }
    }
}

import fs from "fs";
import csv from "csv-parser";
import StudentRepository from "../repo/StudentsRepository.js";

export const seedStudentsData = async () => {
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
            };
            studentsData.push(student);
        })
        .on("end", async () => {
            console.log("CSV file successfully processed. Seeding Students Data...");

            await StudentRepository.seedStudents(studentsData);
        });
};

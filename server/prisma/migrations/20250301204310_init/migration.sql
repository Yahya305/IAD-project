-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "studentId" TEXT NOT NULL,
    "seatNo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "Team" (
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "challengeId" TEXT NOT NULL,
    "challengeNumber" INTEGER NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("challengeId")
);

-- CreateTable
CREATE TABLE "ChallegeScore" (
    "challengeScoreId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,

    CONSTRAINT "ChallegeScore_pkey" PRIMARY KEY ("challengeScoreId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_seatNo_key" ON "Student"("seatNo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("teamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallegeScore" ADD CONSTRAINT "ChallegeScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallegeScore" ADD CONSTRAINT "ChallegeScore_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("challengeId") ON DELETE RESTRICT ON UPDATE CASCADE;

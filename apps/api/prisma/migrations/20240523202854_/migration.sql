/*
  Warnings:

  - You are about to drop the `PatientsAndDoctors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PatientsAndDoctors" DROP CONSTRAINT "PatientsAndDoctors_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "PatientsAndDoctors" DROP CONSTRAINT "PatientsAndDoctors_patientId_fkey";

-- DropTable
DROP TABLE "PatientsAndDoctors";

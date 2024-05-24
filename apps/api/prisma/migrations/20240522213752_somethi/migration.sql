-- DropIndex
DROP INDEX "Appointment_doctorId_key";

-- DropIndex
DROP INDEX "Appointment_patientId_key";

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "medicalFileId" TEXT NOT NULL,
    "instructions" TEXT,
    "medics" TEXT,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_patientId_key" ON "Consultation"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_doctorId_key" ON "Consultation"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_medicalFileId_key" ON "Consultation"("medicalFileId");

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_medicalFileId_fkey" FOREIGN KEY ("medicalFileId") REFERENCES "MedicalFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

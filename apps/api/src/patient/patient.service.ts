import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PatientService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getPatientById(id: string) {
    return await this.databaseService.patient.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
        Appointment: {
          include: {
            doctor: {
              include: {
                user: true,
              },
            },
          },
        },
        Consultation: {
          include: {
            doctor: {
              include: {
                user: true,
              },
            },
          },
        },
        MedicalFile: true,
      },
    });
  }

  async updateMedicalFile(
    medicalFile: Prisma.MedicalFileUpdateInput,
    id: string,
  ) {
    return await this.databaseService.medicalFile.update({
      data: {},
      where: {
        id,
      },
    });
  }

  async updateProfileInformations(
    profileInfos: Prisma.PatientUpdateInput,
    id: string,
  ) {
    return await this.databaseService.patient.update({
      data: profileInfos,
      where: {
        id,
      },
    });
  }
}

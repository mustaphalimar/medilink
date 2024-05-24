import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DoctorService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createConsultation(createConsultation: Prisma.ConsultationCreateInput) {
    return await this.databaseService.consultation.create({
      data: createConsultation,
    });
  }

  async createAdmin(createAdmin: Prisma.AdminCreateInput) {
    return await this.databaseService.admin.create({
      data: createAdmin,
    });
  }

  async getMyPatients(id: string) {
    return await this.databaseService.doctor.findMany({
      where: {
        id: id,
      },
      include: {
        patients: true,
      },
    });
  }

  async getMyAdmins(id: string) {
    return await this.databaseService.admin.findMany({
      where: {
        doctorId: id,
      },
    });
  }
}

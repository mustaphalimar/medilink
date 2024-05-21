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
}

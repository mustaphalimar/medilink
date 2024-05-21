import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Prisma } from '@prisma/client';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  createConsultation(
    @Body() createConsultation: Prisma.ConsultationCreateInput,
  ) {
    return this.doctorService.createConsultation(createConsultation);
  }
}

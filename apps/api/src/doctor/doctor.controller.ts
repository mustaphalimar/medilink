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

  @Get()
  getDoctors() {
    return this.doctorService.getDoctors();
  }

  @Get('/:id')
  getDoctorById(id: string) {
    return this.doctorService.getDoctorById(id);
  }

  @Post()
  createConsultation(
    @Body() createConsultation: Prisma.ConsultationCreateInput,
  ) {
    return this.doctorService.createConsultation(createConsultation);
  }

  @Get('my-patients/:id')
  getMyPatients(@Param('id') id: string) {
    return this.doctorService.getMyPatients(id);
  }

  @Get('my-admins/:id')
  getMyAdmins(@Param('id') id: string) {
    return this.doctorService.getMyAdmins(id);
  }
}

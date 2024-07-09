import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';

import { Prisma } from '@prisma/client';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('/:id')
  getPatientById(@Param('id') id: string) {
    return this.patientService.getPatientById(id);
  }

  // get pending appointments
  @Get('my-appointments/pending/:id')
  getPendingAppointments(@Param('id') id: string) {
    return this.patientService.getPendingAppointments(id);
  }

  // get scheduled appointments
  @Get('my-appointments/scheduled/:id')
  getScheduledAppointments(@Param('id') id: string) {
    return this.patientService.getScheduledAppointments(id);
  }

  // get completed appointments
  @Get('my-appointments/completed/:id')
  getCompletedAppointments(@Param('id') id: string) {
    return this.patientService.getCompletedAppointments(id);
  }

  @Patch('/medical-file/:id')
  update(
    @Param('id') id: string,
    @Body() udpateMedicalFile: Prisma.MedicalFileUpdateInput,
  ) {
    return this.patientService.updateMedicalFile(udpateMedicalFile, id);
  }
}

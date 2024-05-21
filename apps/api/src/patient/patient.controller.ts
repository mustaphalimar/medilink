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

  @Patch('/medical-file/:id')
  update(
    @Param('id') id: string,
    @Body() udpateMedicalFile: Prisma.MedicalFileUpdateInput,
  ) {
    return this.patientService.updateMedicalFile(udpateMedicalFile, id);
  }
}

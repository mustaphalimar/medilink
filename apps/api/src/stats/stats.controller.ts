import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('/:id')
  async findAll(@Param('id') id: string) {
    const patients = await this.statsService.getTotalPatientsByGender(id);
    const appointments =
      await this.statsService.getAppointmentsByMonthLast6Months(id);
    const consultations =
      await this.statsService.getConsultationsByMonthLast6Months(id);

    return {
      patients,
      appointments,
      consultations,
    };
  }
}

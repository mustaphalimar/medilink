import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Prisma } from '@prisma/client';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get('available-dates')
  getAvailableDates(@Query('start') start: string, @Query('end') end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return this.appointmentsService.getAvailableDates(startDate, endDate);
  }

  @Get('my-appointments/:id')
  getAppointmentsByDoctor(@Param('id') id: string) {
    return this.appointmentsService.getAppointmentsByDoctor(id);
  }

  @Get('my-appointments/scheduled/:id')
  getScheduledAppointmentsByDoctor(@Param('id') id: string) {
    return this.appointmentsService.getScheduledAppointmentsByDoctor(id);
  }

  @Post()
  create(@Body() createAppointmentDto: Prisma.AppointmentCreateInput) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(id);
  }

  @Patch('scheduled/:id')
  updateScheduled(@Param('id') id: string) {
    return this.appointmentsService.updateScheduled(id);
  }

  @Patch('done/:id')
  updateDone(@Param('id') id: string) {
    return this.appointmentsService.updateDone(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: Prisma.AppointmentUpdateInput,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}

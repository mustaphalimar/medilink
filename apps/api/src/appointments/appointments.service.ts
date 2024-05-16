import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createAppointmentDto: Prisma.AppointmentCreateInput) {
    return await this.databaseService.appointment.create({
      data: createAppointmentDto,
    });
  }

  async findAll() {
    return await this.databaseService.appointment.findMany({});
  }

  async findOne(id: string) {
    return await this.databaseService.appointment.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateAppointmentDto: Prisma.AppointmentUpdateInput,
  ) {
    return await this.databaseService.appointment.update({
      where: {
        id,
      },
      data: updateAppointmentDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.appointment.delete({
      where: {
        id,
      },
    });
  }

  async getAvailableDates(start: Date, end: Date): Promise<Date[]> {
    const appointments = await this.databaseService.appointment.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
    });

    const bookedDates = appointments.map((app) => app.date);
    const availableDates = [];

    // Assuming appointments can be booked every hour from 9 AM to 5 PM
    for (
      let date = new Date(start);
      date <= end;
      date.setDate(date.getDate() + 1)
    ) {
      for (let hour = 9; hour <= 17; hour++) {
        const appointmentDate = new Date(date);
        appointmentDate.setHours(hour, 0, 0, 0);
        if (
          !bookedDates.some((d) => d.getTime() === appointmentDate.getTime())
        ) {
          availableDates.push(new Date(appointmentDate));
        }
      }
    }

    return availableDates;
  }
}

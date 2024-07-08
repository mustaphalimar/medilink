import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, AppointmentsService, UsersService],
})
export class DoctorModule {}

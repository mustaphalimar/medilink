import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, AppointmentsModule, PatientModule, DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

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
import { AppointmentsService } from 'src/appointments/appointments.service';
import { UsersService } from 'src/users/users.service';

@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly doctorService: DoctorService,
    private readonly appointmentsService: AppointmentsService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getDoctors() {
    return this.doctorService.getDoctors();
  }

  @Get('/:id')
  getDoctorById(id: string) {
    return this.doctorService.getDoctorById(id);
  }

  @Patch('/:id')
  async updateDoctorInfo(
    @Param('id') id: string,
    @Body()
    udpateDoctor: {
      name: string | undefined;
      speciality: string | undefined;
      adress: string | undefined;
      phoneNumber: string | undefined;
      cred: {
        userId: string;
        email: string | undefined;
        password?: string | undefined;
      };
    },
  ) {
    const { cred } = udpateDoctor;
    const userId = cred.userId;
    delete udpateDoctor.cred.userId;

    await this.usersService.update(userId, cred);
    delete udpateDoctor.cred;
    return this.doctorService.updaeDoctorInfo(id, udpateDoctor);
  }

  @Post('/create-consultation')
  async createConsultation(
    @Body() createConsultation: Prisma.ConsultationCreateInput,
  ) {
    const consultation =
      await this.doctorService.createConsultation(createConsultation);
    await this.appointmentsService.updateDone(consultation.appointmentId);
    return consultation;
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

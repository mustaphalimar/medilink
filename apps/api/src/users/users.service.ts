import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    const user = await this.databaseService.user.create({
      data: createUserDto,
      include: {
        patient: true,
      },
    });

    if (user.role === 'DOCTOR') {
      await this.databaseService.doctor.create({
        data: {
          userId: user.id,
        },
      });
    }

    if (user.role === 'SUPER_ADMIN') {
      await this.databaseService.superAdmin.create({
        data: {
          userId: user.id,
        },
      });
    }

    if (user.role === 'PATIENT') {
      const patient = await this.databaseService.patient.create({
        data: {
          userId: user.id,
          gendre: 'male',
          height: 180,
          weight: 90,
          age: 36,
        },
      });

      await this.databaseService.medicalFile.create({
        data: {
          patientId: patient.id,
        },
      });
    }

    return user;
  }

  async findAll() {
    return this.databaseService.user.findMany({});
  }

  async findOne(id: string) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    if (updateUserDto.password) {
      const pw = updateUserDto.password;
      if (typeof pw == 'string') {
        updateUserDto.password = await bcrypt.hash(pw, roundsOfHashing);
      }
    }

    return await this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}

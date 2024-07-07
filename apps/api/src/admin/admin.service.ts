import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly usersService: UsersService,
  ) {}
  //creating admin
  async create(doctorId: string, createUserDto: Prisma.UserCreateInput) {
    const doctor = await this.databaseService.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new Error(`Doctor with ID ${doctorId} does not exist`);
    }

    const user = await this.usersService.create(createUserDto);

    const admin = await this.databaseService.admin.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        doctor: {
          connect: {
            id: doctor.id,
          },
        },
      },
      include: {
        user: true,
        doctor: true,
      },
    });

    return admin;
  }

  async findAllByDoctor(doctorId: string) {
    return await this.databaseService.admin.findMany({
      where: {
        doctorId,
      },
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.databaseService.admin.findFirst({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, updateAdminDto: Prisma.UserUpdateInput) {
    return await this.databaseService.user.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  async remove(id: string) {
    const admin = await this.databaseService.admin.delete({
      where: { id },
    });

    return await this.databaseService.user.delete({
      where: {
        id: admin.userId,
      },
    });
  }
}

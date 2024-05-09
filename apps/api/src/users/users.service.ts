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

    return this.databaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.databaseService.user.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if (updateUserDto.password) {
      const pw = updateUserDto.password;
      if (typeof pw == 'string') {
        updateUserDto.password = await bcrypt.hash(pw, roundsOfHashing);
      }
    }

    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}

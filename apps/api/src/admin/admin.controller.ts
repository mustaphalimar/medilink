import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly usersService: UsersService,
  ) {}

  @Post(':doctorId')
  create(
    @Param('doctorId') doctorId: string,
    @Body() createUserDto: Prisma.UserCreateInput,
  ) {
    return this.adminService.create(doctorId, createUserDto);
  }

  @Get(':doctorId')
  findAllByDoctor(@Param('doctorId') doctorId: string) {
    return this.adminService.findAllByDoctor(doctorId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.adminService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdminDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}

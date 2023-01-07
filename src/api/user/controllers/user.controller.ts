import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../services/user.service';
import { CreateUserProfileDto } from '../dtos/create-user-profile.dto';
import { CreateUserPostDto } from '../dtos/create-user-post.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public getUsers() {
    return this.userService.findUsers();
  }

  @Put(':id')
  public async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Post(':id/profiles')
  public createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  public createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto
  ) {
    return this.userService.createUserPost(id, createUserPostDto);
  }
}

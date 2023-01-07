import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dtos/create-habit.dto';
import { UpdateHabitDto } from './dtos/update-habit.dto';

@Injectable()
export class HabitService {
  create(createHabitDto: CreateHabitDto) {
    return 'This action adds a new habit';
  }

  findAll() {
    return `This action returns all habit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}

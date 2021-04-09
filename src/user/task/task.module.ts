import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskController } from './task.controller';
import { Task } from './task.model';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TaskController],
})
export class TaskModule {}

import { Controller, Get } from '@nestjs/common';

@Controller('users/:id/tasks')
export class TaskController {
  @Get()
  findTasks() {
    return [];
  }
}

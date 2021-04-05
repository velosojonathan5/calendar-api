import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(): any[] {
    const task1 = {
      id: 1,
      description: 'Cozinhar o almoço',
    };

    const task2 = {
      id: 2,
      description: 'Jogar video game',
    };

    return [task1, task2];
  }
}

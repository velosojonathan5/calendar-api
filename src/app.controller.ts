import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  sum(x: number, y: number) {
    return x + y + 2;
  }
}

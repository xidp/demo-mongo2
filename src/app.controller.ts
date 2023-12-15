import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type InfoMessage = {
  project: string;
  message: string;
  dbEngine: string;
  api: any;
};

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getApiInfo(): InfoMessage {
    return {
      project: 'demo-mongo2',
      message: 'Status: OK',
      dbEngine: this.configService.get<string>('DB_DRIVER'),
      api: {
        'GET /': 'API General Infos',
        'GET /todos': 'Fetch all todos from database',
        'POST /todos': 'Saves a new todo into database',
      },
    };
  }
}

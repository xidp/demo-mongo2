import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MongooseHealthIndicator,
  // DiskHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  // private readonly disk: DiskHealthIndicator,
  constructor(
    private health: HealthCheckService,
    private db: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      // () =>
      //   this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.5 }),
      // () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}

import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production' ? true : false, // in PRODUCTION use true
    }),
    // MongooseModule.forRoot(
    //   'mongodb://admin:admin@localhost:27017/todo_db?authSource=admin',
    // ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_CONN_STRING'),
      }),
      inject: [ConfigService],
    }),
    TodosModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

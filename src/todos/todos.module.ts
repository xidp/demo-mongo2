import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModelName, TodoSchema } from './schemas/todo.schema';
// import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoModelName, schema: TodoSchema }]),
    // OR using the schema class name
    // MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}

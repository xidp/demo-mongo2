import { Injectable } from '@nestjs/common';
import { TodoModelName, Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(TodoModelName) private readonly todoModel: Model<Todo>,
  ) {}
  // constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  getAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    const newTodo = {
      name: dto.name,
      description: dto.description,
      createdAt: new Date().toISOString(),
    };

    const createdTodo = new this.todoModel(newTodo);
    return await createdTodo.save();
  }
}

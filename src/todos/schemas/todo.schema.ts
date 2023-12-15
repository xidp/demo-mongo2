import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  createdAt: string;

  @Prop({ default: false })
  itsDone: boolean;

  // @Prop()
  // category: string;

  // @Prop({ nullable: true })
  // costs: number;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
export const TodoModelName = 'TodoModel';

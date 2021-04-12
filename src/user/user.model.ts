import { Column, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { Task } from './task/task.model';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @HasMany(() => Task)
  task: Task[];
}

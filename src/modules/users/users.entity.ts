import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  gender: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  active: boolean;
}

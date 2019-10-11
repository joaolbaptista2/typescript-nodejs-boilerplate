import { Model, Column, Table, AllowNull } from 'sequelize-typescript'

@Table
export class User extends Model<User> {
  @AllowNull
  @Column
  name!: string

  @Column
  surname!: string

  @Column
  age?: number

  @Column
  email?: string
}

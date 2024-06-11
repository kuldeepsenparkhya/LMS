import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "subscriptions",
})
export class Subscription extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
  })
  no_of_book_issued!: number;

  @Column({
    type: DataType.INTEGER,
  })
  maximum_no_of_book_issued!: number;
}

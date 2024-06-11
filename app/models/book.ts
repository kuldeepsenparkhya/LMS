import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "books",
})
export class Book extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  writer_name!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  quantity!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  edition!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ISBN!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  genre!: string;
}

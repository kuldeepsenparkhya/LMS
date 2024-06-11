import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "categories",
})
export class Category extends Model {
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
}

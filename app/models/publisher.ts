import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "publishers",
})
export class Publisher extends Model {
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
  birth_place!: string;
}

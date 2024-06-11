import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "plans",
})
export class Plan extends Model {
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
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  plan_expiry!: Date;
}

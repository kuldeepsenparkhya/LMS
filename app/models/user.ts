import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "users",
})
export class User extends Model {
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
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pin_code!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['admin', 'user']],
    },
    })
  role!: string;
}

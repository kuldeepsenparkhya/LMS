import { Sequelize } from 'sequelize-typescript';
import { User } from "../models/user";

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'lib_management_sys',
  username: 'root',  // Change from `user` to `username`
  password: '',
  host: 'localhost',
  port: 3306,
  models: [User],  // Ensure the model is included here
});

const db = {
  sequelize: sequelize,
  Users: User,
};

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized");
});

export default db;

import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Plan } from "./plan";
import { Publisher } from "./publisher";
import { Subscription } from "./subscription";
import { Category } from "./category";

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "lib_management_sys",
  username: "root", // Change from `user` to `username`
  password: "",
  host: "localhost",
  port: 3306,
  models: [User, Category, Plan, Publisher, Subscription], // Ensure the model is included here
});

const db = {
  sequelize: sequelize,
  Users: User,
  Categories: Category,
  Plans: Plan,
  Publishers: Publisher,
  Subscriptions: Subscription,
};

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized");
});

export default db;

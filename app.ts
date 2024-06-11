import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import user from "./app/routes/user";
import category from "./app/routes/category";
import plan from "./app/routes/plan";
import publisher from "./app/routes/publisher";
import subscription from "./app/routes/subscription";


import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 4500;

app.use(bodyParser.json());

user(app);
category(app);
plan(app);
subscription(app);
publisher(app);

app.get("*", (req: Request, res: Response) => {
  res.status(400).send({
    message: "Hunn smart!",
    error: true,
    status: 0,
  });
});

app.listen(port, () => console.log(`Server is running on port:${port}`));

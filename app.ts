import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import user from "./app/routes/user";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 4500;

app.use(bodyParser.json());

user(app);

app.get("*", (req: Request, res: Response) => {
  res.status(400).send({
    message: "Hunn smart!",
    error: true,
    status: 0,
  });
});

app.listen(port, () => console.log(`Server is running on port:${port}`));

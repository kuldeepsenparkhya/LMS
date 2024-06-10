import { Router, Express } from "express";
import { createUser } from "../controllers/user";

const router = Router();

router.post("/", createUser);

const user = (app: Express) => {
  app.use("/api/user", router);
};

export default user;

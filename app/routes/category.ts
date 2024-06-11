import { createCategory } from "../controllers/category";
import { Router, Express } from "express";

const router = Router();

router.post("/", createCategory);

const category = (app: Express) => {
  app.use("/api/categories", router);
};

export default category;

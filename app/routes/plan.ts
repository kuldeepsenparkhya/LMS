import { Router, Express } from "express";
import { createPlan } from "../controllers/plan";

const router = Router();

router.post("/", createPlan);

const plan = (app: Express) => {
  app.use("/api/plan", router);
};

export default plan;

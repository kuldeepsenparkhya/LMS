import { createSubscription } from "../controllers/subscription";
import { Router, Express } from "express";

const router = Router();

router.post("/", createSubscription);

const subscription = (app: Express) => {
  app.use("/api/subscription", router);
};

export default subscription;

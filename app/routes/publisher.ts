import { createPublisher } from "../controllers/publisher";
import { Router, Express } from "express";

const router = Router();

router.post("/", createPublisher);

const publisher = (app: Express) => {
  app.use("/api/publisher", router);
};

export default publisher;

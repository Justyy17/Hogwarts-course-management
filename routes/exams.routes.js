import * as ExamsControllers from "../controllers/exams.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", ExamsControllers.getAllExams);
router.get("/:id", ExamsControllers.getExamById);
router.post("/", ExamsControllers.postExam);
router.delete("/:id", ExamsControllers.deleteExam);
export default router;

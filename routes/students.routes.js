import * as StudentControllers from "../controllers/students.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", StudentControllers.getAllStudents);
router.get("/:id", StudentControllers.getStudentById);
router.post("/", StudentControllers.postStudent);
router.delete("/:id", StudentControllers.deleteStudent);
export default router;

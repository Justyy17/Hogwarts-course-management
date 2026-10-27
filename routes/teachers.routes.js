import * as TeachersControllers from "../controllers/teachers.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", TeachersControllers.getAllTeachers);
router.get("/:id", TeachersControllers.getTeacherById);
router.post("/", TeachersControllers.postTeacher);
router.delete("/:id", TeachersControllers.deleteTeacher);
export default router;

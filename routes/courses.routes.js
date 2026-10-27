import * as CoursesControllers from "../controllers/courses.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", CoursesControllers.getAllCourses);
router.get("/:id", CoursesControllers.getCourseById);
router.post("/", CoursesControllers.postCourse);
router.delete("/:id", CoursesControllers.deleteCourse);
export default router;

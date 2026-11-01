import * as CoursesControllers from "../controllers/courses.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", CoursesControllers.getAllCourses);
router.get("/:id", CoursesControllers.getCourseById);
router.post("/", CoursesControllers.postCourse);
router.put("/:id", CoursesControllers.putCourse);
router.put("/:id/teacher", CoursesControllers.putCourseTeacher);
router.post("/:id/students", CoursesControllers.postCourseStudent);
router.delete("/:id/students", CoursesControllers.delteCourseStudent);
router.delete("/:id", CoursesControllers.deleteCourse);
export default router;

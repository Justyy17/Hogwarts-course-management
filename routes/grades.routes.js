import * as GradesControllers from "../controllers/grades.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/", GradesControllers.getAllGrades);
export default router;

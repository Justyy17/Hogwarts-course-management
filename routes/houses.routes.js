import { Router } from "express";
import * as HousesControllers from "../controllers/houses.controllers.js";

const router = Router();
router.get("/", HousesControllers.getAllHouses);
router.get("/:id", HousesControllers.getHouseById);
export default router;

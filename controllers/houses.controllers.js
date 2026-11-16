import * as HousesRepositories from "../repositories/houses.repositories.js";
import { httpError } from "../errors.js";

export const getAllHouses = async (req, res) => {
  res.status(200).json(await HousesRepositories.getAllHouses());
};

export const getHouseById = async (req, res) => {
  if (!Number.isInteger(Number(req.params.id))) throw httpError(400, "Invalid Id");
  const house = await HousesRepositories.getHouseById(req.params.id);
  if (!house) throw httpError(404, "House not found");
  res.status(200).json(house);
};

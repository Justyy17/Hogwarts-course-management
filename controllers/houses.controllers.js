import * as HousesRepositories from "../repositories/houses.repositories.js";

export const getAllHouses = async (req, res) => {
  try {
    const allHouses = await HousesRepositories.getAllHouses();
    res.status(200).json(allHouses);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const getHouseById = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const house = await HousesRepositories.getHouseById(req.params.id);
    if (!house) return res.status(404).send({ message: "House not found" });
    res.status(200).json(house);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

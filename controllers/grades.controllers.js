import * as GradesServices from "../services/grades.services.js";

export const getAllGrades = async (req, res) => {
  res.status(200).json(await GradesServices.getAllGrades());
};

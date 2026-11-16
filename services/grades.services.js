import * as GradesRepositories from "../repositories/grades.repositories.js";

export async function getAllGrades() {
  return await GradesRepositories.getAllGrades();
}

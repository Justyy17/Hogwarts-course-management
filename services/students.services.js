import * as StudentRepositories from "../repositories/students.repositories.js";
import { httpError } from "../errors.js";

export async function getAllStudents() {
  return await StudentRepositories.getAllStudents();
}

export async function getStudentById(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const student = await StudentRepositories.getStudentById(id);
  if (!student) throw httpError(404, "Student not found");
  return student;
}

export async function postStudent(name, year, house_id) {
  if (!name) throw httpError(400, "name is required");
  try {
    return await StudentRepositories.postStudent(name, year, house_id);
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "House not found");
    }
    throw error;
  }
}

export async function deleteStudent(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const deleted = await StudentRepositories.deleteStudent(id);
  if (!deleted) throw httpError(404, "Student not found");
  return { message: "Student deleted" };
}

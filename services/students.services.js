import * as StudentRepositories from "../repositories/students.repositories.js";
import { httpError } from "../errors.js";
import studentDto from "../dto/student.dto.js";

export async function getAllStudents() {
  return await StudentRepositories.getAllStudents();
}

export async function getStudentById(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const student = await StudentRepositories.getStudentById(id);
  if (!student) throw httpError(404, "Student not found");
  return student;
}

export async function postStudent(data) {
  const validatedData = studentDto.parse(data);
  try {
    return await StudentRepositories.postStudent(validatedData.name, validatedData.school_year, validatedData.house_id, validatedData.birthday);
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

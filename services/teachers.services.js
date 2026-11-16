import * as TeachersRepositories from "../repositories/teachers.repositories.js";
import { httpError } from "../errors.js";
import updateTeacherDto from "../dto/updateteacher.dto.js";

export async function getAllTeachers() {
  return await TeachersRepositories.getAllTeachers();
}

export async function getTeacherById(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const teacher = await TeachersRepositories.getTeacherById(id);
  if (!teacher) throw httpError(404, "Teacher not found");
  return teacher;
}

export async function postTeacher(name, house_id) {
  if (!name) throw httpError(400, "name is required");
  try {
    return await TeachersRepositories.postTeacher(name, house_id);
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "House not found");
    }
    throw error;
  }
}

export async function putTeacher(id, data) {
  data.id = Number(id);
  const validatedData = updateTeacherDto.parse(data);
  try {
    const teacher = await TeachersRepositories.putTeacher(id, validatedData.name, validatedData.house_id);
    if (!teacher) throw httpError(404, "Teacher not found");
    return teacher;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "House not found");
    }
    throw error;
  }
}

export async function deleteTeacher(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const deleted = await TeachersRepositories.deleteTeacher(id);
  if (!deleted) throw httpError(404, "Teacher not found");
  return { message: "Teacher deleted" };
}

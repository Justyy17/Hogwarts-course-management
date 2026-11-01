import * as CoursesRepositories from "../repositories/courses.repositories.js";
import { getStudentById } from "../repositories/students.repositories.js";
import { httpError } from "../errors.js";

export async function getAllCourses() {
  const allCourses = await CoursesRepositories.getAllCourses();
  return allCourses;
}

export async function getCourseById(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const course = await CoursesRepositories.getCourseById(id);
  if (!course) throw httpError(404, "Course not found");
  return course;
}

export async function postCourse(name, teacher_id) {
  if (!name) throw httpError(400, "name is required");
  try {
    return await CoursesRepositories.postCourse(name, teacher_id);
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Invalid teacher id");
    }
    throw error;
  }
}

export async function putCourse(id, name, teacher_id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  if (!Number.isInteger(Number(teacher_id))) throw httpError(400, "Invalid Teacher Id");
  if (!name) throw httpError(400, "name is required");
  try {
    const course = await CoursesRepositories.putCourse(id, name, teacher_id);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Teacher not found");
    }
    throw error;
  }
}

export async function putCourseTeacher(id, teacher_id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  if (!Number.isInteger(Number(teacher_id))) throw httpError(400, "Invalid Teacher Id");
  try {
    const course = await CoursesRepositories.putCourseTeacher(id, teacher_id);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Teacher not found");
    }
    throw error;
  }
}

export async function postCourseStudent(id, student_id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Course Id");
  if (!Number.isInteger(Number(student_id))) throw httpError(400, "Invalid Student Id");
  try {
    const course = await CoursesRepositories.postCourseStudent(id, student_id);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Student not found");
    }
    throw error;
  }
}

export async function deleteCourseStudent(id, student_id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Course Id");
  if (!Number.isInteger(Number(student_id))) throw httpError(400, "Invalid Student Id");
  const course = await CoursesRepositories.getCourseById(id);
  if (!course) throw httpError(404, "Course not found");
  const student = await getStudentById(student_id);
  if (!student) throw httpError(404, "Student not found");
  const deleted = await CoursesRepositories.deleteCourseStudent(id, student_id);
  if (!deleted) {
    throw httpError(404, "Student not found on course");
  }
  return { message: "Student removed from course" };
}

export async function deleteCourse(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const deleted = await CoursesRepositories.deleteCourse(id);
  if (!deleted) {
    throw httpError(404, "Course not found");
  }
  return { message: "Course deleted" };
}

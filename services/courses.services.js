import * as CoursesRepositories from "../repositories/courses.repositories.js";
import { getStudentById } from "../repositories/students.repositories.js";
import { httpError } from "../errors.js";
import updateCourseDto from "../dto/updatecourse.dto.js";
import courseStudentDto from "../dto/coursestudent.dto.js";
import courseTeacherDto from "../dto/courseteacher.dto.js";

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

export async function postCourse(data) {
  const validatedData = updateCourseDto.parse(data);
  try {
    return await CoursesRepositories.postCourse(validatedData.name, validatedData.teacher_id, validatedData.type, validatedData.level, validatedData.school_year);
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Invalid teacher id");
    }
    throw error;
  }
}

export async function putCourse(id, data) {
  data.id = Number(id);
  const validatedData = updateCourseDto.parse(data);
  try {
    const course = await CoursesRepositories.putCourse(validatedData.name, validatedData.teacher_id, validatedData.type, validatedData.level, validatedData.school_year);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Teacher not found");
    }
    throw error;
  }
}

export async function putCourseTeacher(id, data) {
  data.id = Number(id);
  const validatedData = courseTeacherDto.parse(data);
  try {
    const course = await CoursesRepositories.putCourseTeacher(validatedData.id, validatedData.teacher_id);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Teacher not found");
    }
    throw error;
  }
}

export async function postCourseStudent(id, data) {
  data.id = Number(id);
  const validatedData = courseStudentDto.parse(data);
  try {
    const course = await CoursesRepositories.postCourseStudent(validatedData.id, validatedData.student_id);
    if (!course) throw httpError(404, "Course not found");
    return course;
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "Student not found");
    }
    throw error;
  }
}

export async function deleteCourseStudent(id, data) {
  data.id = Number(id);
  const validatedData = courseStudentDto.parse(data);
  const course = await CoursesRepositories.getCourseById(id);
  if (!course) throw httpError(404, "Course not found");
  const student = await getStudentById(validatedData.student_id);
  if (!student) throw httpError(404, "Student not found");
  const deleted = await CoursesRepositories.deleteCourseStudent(validatedData.id, validatedData.student_id);
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

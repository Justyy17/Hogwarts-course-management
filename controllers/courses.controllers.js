import * as CoursesServices from "../services/courses.services.js";

export const getAllCourses = async (req, res) => {
  res.status(200).json(await CoursesServices.getAllCourses());
};

export const getCourseById = async (req, res) => {
  res.status(200).json(await CoursesServices.getCourseById(req.params.id));
};

export const postCourse = async (req, res) => {
  const data = req.body;
  res.status(201).json(await CoursesServices.postCourse(name, teacher_id));
};

export const putCourse = async (req, res) => {
  const data = req.body;
  res.status(200).json(await CoursesServices.putCourse(req.params.id, name, teacher_id));
};

export const putCourseTeacher = async (req, res) => {
  const data = req.body;
  res.status(200).json(await CoursesServices.putCourseTeacher(req.params.id, teacher_id));
};

export const postCourseStudent = async (req, res) => {
  const data = req.body;
  res.status(200).json(await CoursesServices.postCourseStudent(req.params.id, student_id));
};

export const deleteCourseStudent = async (req, res) => {
  const data = req.body;
  res.status(200).json(await CoursesServices.deleteCourseStudent(req.params.id, student_id));
};

export const deleteCourse = async (req, res) => {
  res.status(200).json(await CoursesServices.deleteCourse(req.params.id));
};

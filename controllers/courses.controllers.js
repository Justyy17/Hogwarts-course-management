import * as CoursesServices from "../services/courses.services.js";

export const getAllCourses = async (req, res) => {
  try {
    res.status(200).json(await CoursesServices.getAllCourses());
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    res.status(200).json(await CoursesServices.getCourseById(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const postCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    res.status(201).json(await CoursesServices.postCourse(name, teacher_id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const putCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    const id = req.params.id;
    res.status(200).json(await CoursesServices.putCourse(id, name, teacher_id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const putCourseTeacher = async (req, res) => {
  try {
    const { teacher_id } = req.body;
    const id = req.params.id;
    res.status(200).json(await CoursesServices.putCourseTeacher(id, teacher_id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const postCourseStudent = async (req, res) => {
  try {
    const { student_id } = req.body;
    const id = req.params.id;
    res.status(200).json(await CoursesServices.postCourseStudent(id, student_id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const delteCourseStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { student_id } = req.body;
    res.status(200).json(await CoursesServices.deleteCourseStudent(id, student_id));
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    res.status(200).json(await CoursesServices.deleteCourse(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

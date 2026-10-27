import * as CoursesRepositories from "../repositories/courses.repositories.js";

export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await CoursesRepositories.getAllCourses();
    res.status(200).json(allCourses);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const course = await CoursesRepositories.getCourseById(req.params.id);
    if (!course) return res.status(404).send({ message: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const postCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    if (!req.body.name) {
      return res.status(400).send({ message: "name is required" });
    }
    const course = await CoursesRepositories.postCourse(name, teacher_id);
    res.status(201).json(course);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).send({ message: "Invalid teacher id" });
    }
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const deleted = await CoursesRepositories.deleteTeacher(req.params.id);
    if (!deleted) {
      return res.status(404).send({ message: "Teacher not found" });
    }
    res.status(200).json({ message: "Teacher deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

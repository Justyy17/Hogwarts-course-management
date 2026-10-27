import * as TeachersRepositories from "../repositories/teachers.repositories.js";

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await TeachersRepositories.getAllTeachers();
    res.status(200).json(allTeachers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const teacher = await TeachersRepositories.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).send({ message: "Teacher not found" });
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const postTeacher = async (req, res) => {
  try {
    const { name, house_id } = req.body;
    if (!req.body.name) {
      return res.status(400).send({ message: "name is required" });
    }
    const teacher = await TeachersRepositories.postTeacher(name, house_id);
    res.status(201).json(teacher);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).send({ message: "Invalid house id" });
    }
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const deleted = await TeachersRepositories.deleteTeacher(req.params.id);
    if (!deleted) {
      return res.status(404).send({ message: "Teacher not found" });
    }
    res.status(200).json({ message: "Teacher deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

import * as StudentRepositories from "../repositories/students.repositories.js";

export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await StudentRepositories.getAllStudents();
    res.status(200).json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const getStudentById = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const student = await StudentRepositories.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const postStudent = async (req, res) => {
  try {
    const { name, year, house_id } = req.body;
    if (!name) return res.status(400).send({ message: "Name is required" });
    const student = await StudentRepositories.postStudent(name, year, house_id);
    res.status(201).json(student);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).send({ message: "Invalid house id" });
    }
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    if (!Number.isInteger(Number(req.params.id))) return res.status(400).json({ message: "Invalid Id" });
    const deleted = await StudentRepositories.deleteStudent(req.params.id);
    if (!deleted) return res.status(404).send({ message: "Student not found" });
    res.status(200).send({ message: "Student deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error connecting to database" });
  }
};

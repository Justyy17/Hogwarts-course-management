import * as StudentServices from "../services/students.services.js";

export const getAllStudents = async (req, res) => {
  res.status(200).json(await StudentServices.getAllStudents());
};

export const getStudentById = async (req, res) => {
  res.status(200).json(await StudentServices.getStudentById(req.params.id));
};

export const postStudent = async (req, res) => {
  const { name, year, house_id } = req.body;
  res.status(201).json(await StudentServices.postStudent(name, year, house_id));
};

export const deleteStudent = async (req, res) => {
  res.status(200).json(await StudentServices.deleteStudent(req.params.id));
};

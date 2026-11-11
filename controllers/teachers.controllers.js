import * as TeachersServices from "../services/teachers.services.js";

export const getAllTeachers = async (req, res) => {
  res.status(200).json(await TeachersServices.getAllTeachers());
};

export const getTeacherById = async (req, res) => {
  res.status(200).json(await TeachersServices.getTeacherById(req.params.id));
};

export const postTeacher = async (req, res) => {
  const { name, house_id } = req.body;
  res.status(201).json(await TeachersServices.postTeacher(name, house_id));
};

export const putTeacher = async (req, res) => {
  const { name, house_id } = req.body;
  res.status(200).json(await TeachersServices.putTeacher(req.params.id, name, house_id));
};

export const deleteTeacher = async (req, res) => {
  res.status(200).json(await TeachersServices.deleteTeacher(req.params.id));
};

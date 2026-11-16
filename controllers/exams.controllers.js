import * as ExamsServices from "../services/exams.services.js";

export const getAllExams = async (req, res) => {
  res.status(200).json(await ExamsServices.getAllExams());
};

export const getExamById = async (req, res) => {
  res.status(200).json(await ExamsServices.getExamById(req.params.id));
};

export const postExam = async (req, res) => {
  const data = req.body;
  res.status(201).json(await ExamsServices.postExam(data));
};

export const deleteExam = async (req, res) => {
  res.status(200).json(await ExamsServices.deleteExam(req.params.id));
};

import * as ExamRepositories from "../repositories/exams.repositories.js";
import { httpError } from "../errors.js";
import examDto from "../dto/exam.dto.js";

export async function getAllExams() {
  return await ExamRepositories.getAllExams();
}

export async function getExamById(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const exam = await ExamRepositories.getExamById(id);
  if (!exam) throw httpError(404, "Exam not found");
  return exam;
}

export async function postExam(data) {
  const validatedData = examDto.parse(data);
  try {
    return await ExamRepositories.postExam(validatedData.course_id, validatedData.student_id, validatedData.grade);
  } catch (error) {
    if (error.code === "23503") {
      throw httpError(400, "House not found");
    }
    throw error;
  }
}

export async function deleteExam(id) {
  if (!Number.isInteger(Number(id))) throw httpError(400, "Invalid Id");
  const deleted = await ExamRepositories.deleteExam(id);
  if (!deleted) throw httpError(404, "Exam not found");
  return { message: "Exam deleted" };
}

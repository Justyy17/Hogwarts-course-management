import { pool } from "../db.js";

export async function getAllExams() {
  const result = await pool.query("SELECT * FROM exams");
  return result.rows;
}

export async function getExamById(id) {
  const result = await pool.query("SELECT * FROM exams WHERE id = $1", [id]);
  return result.rows[0];
}

export async function postExam(course_id, student_id, grade) {
  const result = await pool.query("INSERT INTO exams (course_id, student_id, grade) VALUES ($1, $2, $3) RETURNING *", [course_id, student_id, grade]);
  return result.rows[0];
}

export async function putExam(id, course_id, student_id, grade) {
  const result = await pool.query("UPDATE exams SET course_id = $1, student_id = $2, grade = $3 WHERE id = $4 RETURNING *", [course_id, student_id, grade, id]);
  return result.rows[0];
}

export async function deleteExam(id) {
  const result = await pool.query("DELETE FROM exams WHERE id = $1", [id]);
  return result.rowCount > 0;
}

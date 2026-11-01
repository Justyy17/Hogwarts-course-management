import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query("SELECT c.id, c.name, c.teacher_id, COALESCE(json_agg(json_build_object('id', s.id, 'name', s.name)) FILTER (WHERE s.id IS NOT NULL), '[]') AS students FROM courses c LEFT JOIN course_students cs ON cs.course_id = c.id LEFT JOIN students s ON s.id = cs.student_id GROUP BY c.id");
  return result.rows;
}

export async function getCourseById(id) {
  const result = await pool.query("SELECT c.id, c.name, c.teacher_id, COALESCE(json_agg(json_build_object('id', s.id, 'name', s.name)) FILTER (WHERE s.id IS NOT NULL), '[]') AS students FROM courses c LEFT JOIN course_students cs ON cs.course_id = c.id LEFT JOIN students s ON s.id = cs.student_id WHERE c.id = $1 GROUP BY c.id", [id]);
  return result.rows[0];
}

export async function postCourse(name, teacher_id) {
  const result = await pool.query("INSERT INTO courses (name, teacher_id) VALUES ($1, $2) RETURNING *", [name, teacher_id]);
  return result.rows[0];
}

export async function putCourse(id, name, teacher_id) {
  const result = await pool.query("UPDATE courses SET name = $1, teacher_id = $2 WHERE id = $3 RETURNING *", [name, teacher_id, id]);
  return result.rows[0];
}

export async function putCourseTeacher(id, teacher_id) {
  const result = await pool.query("UPDATE courses SET teacher_id = $1 WHERE id = $2 RETURNING *", [teacher_id, id]);
  return result.rows[0];
}

export async function postCourseStudent(id, student_id) {
  const result = await pool.query("INSERT INTO course_students (course_id, student_id) VALUES ($1, $2) RETURNING *", [id, student_id]);
  return result.rows[0];
}

export async function deleteCourseStudent(id, student_id) {
  const result = await pool.query("DELETE FROM course_students WHERE course_id = $1 AND student_id = $2", [id, student_id]);
  return result.rowCount > 0;
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  return result.rowCount > 0;
}

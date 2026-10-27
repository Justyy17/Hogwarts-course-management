import { pool } from "../db";

export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
}

export async function getCourseById(id) {
  const result = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);
  return result.rows[0];
}

export async function postCourse(name, teacher_id) {
  const result = await pool.query("INSERT INTO courses (name, teacher_id) VALUES ($1, $2) RETURNING *", [name, teacher_id]);
  return result.rows[0];
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  return result.rowCount > 0;
}

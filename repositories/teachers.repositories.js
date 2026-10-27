import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM teachers");

  return result.rows;
}

export async function getTeacherById(id) {
  const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
  return result.rows[0];
}

export async function postTeacher(name, houseid) {
  const result = await pool.query("INSERT INTO teachers (name, house_id) VALUES ($1, $2) RETURNING *", [name, houseid]);
  return result.rows[0];
}

export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM teachers WHERE id = $1", [id]);
  return result.rowCount > 0;
}

const db = require("../database/index.db");

exports.getAll = async () => (await db.query("SELECT * FROM usuarios")).rows;
exports.getById = async (id) => (await db.query("SELECT * FROM usuarios WHERE id_usuario = $1", [id])).rows[0];

exports.create = async (usuario) => (await db.query(
    "INSERT INTO usuarios (cedula, nombre, correo, telefono) VALUES ($1, $2, $3, $4) RETURNING *",
    [usuario.cedula, usuario.nombre, usuario.correo, usuario.telefono]
)).rows[0];

exports.update = async (id, usuario) => (await db.query(
    "UPDATE usuarios SET cedula = $1, nombre = $2, correo = $3, telefono = $4 WHERE id_usuario = $5 RETURNING *",
    [usuario.cedula, usuario.nombre, usuario.correo, usuario.telefono, id]
)).rows[0];

exports.delete = async (id) => (await db.query("DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *", [id])).rows[0];

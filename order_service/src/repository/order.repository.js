```javascript
const db = require("../database/index.db");

exports.obtenerTodos = async () => (await db.query("SELECT * FROM ordenes")).rows;
exports.obtenerPorId = async (id) => (await db.query("SELECT * FROM ordenes WHERE id = $1", [id])).rows[0];

exports.crear = async (orden) => (await db.query(
    "INSERT INTO ordenes (user_id, product_id, cantidad) VALUES ($1, $2, $3) RETURNING *",
    [orden.user_id, orden.product_id, orden.cantidad]
)).rows[0];

exports.actualizar = async (id, orden) => (await db.query(
    "UPDATE ordenes SET user_id = $1, product_id = $2, cantidad = $3 WHERE id = $4 RETURNING *",
    [orden.user_id, orden.product_id, orden.cantidad, id]
)).rows[0];

exports.eliminar = async (id) => (await db.query("DELETE FROM ordenes WHERE id = $1 RETURNING *", [id])).rows[0];
```

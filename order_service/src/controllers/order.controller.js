const servicio = require('../services/order.service');
const manejarError = require('../utils/catchasync');

exports.getOrders = manejarError(async (req, res) => res.json(await servicio.getAll()));
exports.getOrderById = manejarError(async (req, res) => {
    const orden = await servicio.getById(req.params.id);
    if (!orden) throw new Error("Orden no encontrada");
    res.json(orden);
});

exports.createOrder = manejarError(async (req, res) => {
    const { detalles: listaProductos, id_usuario } = req.body;
    if (!listaProductos || !listaProductos.length) throw new Error("Detalles requeridos");

    const productosConPrecio = await Promise.all(listaProductos.map(async productoDetalle => {
        try {
            return { ...productoDetalle, precio: (await (await fetch(`http://localhost:4002/api/product/${productoDetalle.id_producto}`)).json()).precio };
        } catch (e) { throw new Error(`Producto ${productoDetalle.id_producto} no encontrado`); }
    }));

    res.status(201).json({ order: await servicio.create({ id_usuario, detalles: productosConPrecio }) });
});

exports.updateOrder = manejarError(async (req, res) => {
    const updated = await servicio.update(req.params.id, req.body);
    if (!updated) throw new Error("Orden no encontrada");
    res.json(updated);
});
exports.deleteOrder = manejarError(async (req, res) => res.json({ message: "Eliminada", orden: await servicio.delete(req.params.id) }));
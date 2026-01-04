const servicio = require('../services/product.service');
const manejarError = require('../utils/catchasync');

exports.getProducts = manejarError(async (req, res) => res.json(await servicio.getAll()));

exports.getProductById = manejarError(async (req, res) => {
    const producto = await servicio.getById(req.params.id);
    if (!producto) throw new Error("Producto no encontrado");
    res.json(producto);
});

exports.createProduct = manejarError(async (req, res) => res.status(201).json(await servicio.create(req.body)));

exports.updateProduct = manejarError(async (req, res) => res.json(await servicio.update(req.params.id, req.body)));

exports.deleteProduct = manejarError(async (req, res) => res.json(await servicio.delete(req.params.id)));
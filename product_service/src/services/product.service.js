const repositorio = require('../repositories/product.repository');

const validateProduct = (producto, isUpdate = false) => {
    if (isUpdate && !producto.nombre && !producto.descripcion && producto.precio === undefined && producto.stock === undefined) return;
    if ((!isUpdate || producto.nombre) && !producto.nombre) throw new Error("Nombre obligatorio");
    if ((!isUpdate || producto.precio !== undefined) && (typeof producto.precio !== 'number' || producto.precio <= 0)) throw new Error("Precio inválido");
    if ((!isUpdate || producto.stock !== undefined) && (typeof producto.stock !== 'number' || producto.stock < 0)) throw new Error("Stock inválido");
};

exports.getAll = repositorio.getAll;
exports.getById = repositorio.getById;
exports.create = (producto) => (validateProduct(producto), repositorio.create(producto));
exports.update = (id, data) => (validateProduct(data, true), repositorio.update(id, data));
exports.delete = repositorio.delete;
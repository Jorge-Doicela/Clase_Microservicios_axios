const repositorio = require('../repositories/order.repository');

const calculateTotal = (orden) => {
    if (!orden.detalles) return orden;
    orden.totalCalculado = orden.detalles.reduce((totalAcumulado, producto) => {
        if (!producto.cantidad || producto.cantidad <= 0) throw new Error("Cantidad inválida");
        return totalAcumulado + (producto.cantidad * producto.precio);
    }, 0);
    return orden;
};

exports.getAll = repositorio.getAll;
exports.getById = repositorio.getById;
exports.create = (orden) => {
    if (!orden.id_usuario || !orden.detalles || !orden.detalles.length) throw new Error("Datos incompletos");
    return repositorio.create(calculateTotal(orden));
};
exports.delete = repositorio.delete;
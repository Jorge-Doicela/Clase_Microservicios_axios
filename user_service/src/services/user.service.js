const repositorio = require('../repositories/user.repository');

const validateUser = (usuario, create = true) => {
    if ((create || usuario.nombre) && (!usuario.nombre || usuario.nombre.length < 3)) throw new Error("Nombre corto");
    if ((create || usuario.correo) && !/^\S+@\S+\.\S+$/.test(usuario.correo)) throw new Error("Email inválido");
    if ((create || usuario.cedula) && (!usuario.cedula || usuario.cedula.length < 8)) throw new Error("Cédula inválida");
};

exports.getAll = repositorio.getAll;
exports.getById = repositorio.getById;
exports.create = (usuario) => (validateUser(usuario), repositorio.create(usuario));
exports.update = (id, data) => (validateUser(data, false), repositorio.update(id, data));
exports.delete = repositorio.delete;
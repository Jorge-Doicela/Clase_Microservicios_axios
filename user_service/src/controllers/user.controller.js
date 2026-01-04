const servicio = require('../services/user.service');
const manejarError = require('../utils/catchasync');

exports.getUsers = manejarError(async (req, res) => res.json(await servicio.getAll()));

exports.getUserById = manejarError(async (req, res) => {
    const usuario = await servicio.getById(req.params.id);
    if (!usuario) throw new Error("Usuario no encontrado");
    res.json(usuario);
});

exports.createUser = manejarError(async (req, res) => res.status(201).json(await servicio.create(req.body)));

exports.updateUser = manejarError(async (req, res) => res.json(await servicio.update(req.params.id, req.body)));

exports.deleteUser = manejarError(async (req, res) => res.json(await servicio.delete(req.params.id)));
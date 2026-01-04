module.exports = funcionControlador => (req, res, next) => Promise.resolve(funcionControlador(req, res, next)).catch(next);

var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;


// ==========================================
//  Verificar token
// ==========================================
exports.verificaToken = function (req, res, next) {

    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded.usuario;

        next();


    });
}
// ==========================================
//  Verificar Admin
// ==========================================
exports.verificaADMIN_ROLE = function (req, res, next) {

    var usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token incorrecto - No es administrador',
            errors: { mensaje: 'No es Administrador, No puede hacer eso' }
        });
    }

}
// ==========================================
//  Verificar Admin o mismo Usuario
// ==========================================
exports.verificaADMIN_o_MismoUsuario = function (req, res, next) {

    var usuario = req.usuario;
    var id = req.params.id

    if (usuario.role === 'ADMIN_ROLE' || usuario._id === id) {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token incorrecto - No es administrador',
            errors: { mensaje: 'No es Administrador, No puede hacer eso' }
        });
    }

}
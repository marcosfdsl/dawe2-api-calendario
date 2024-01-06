const express = require('express');

const respuesta = require('../../red/respuestas')
const controlador = require('./index');

const router = express.Router();

router.get('/', todos);
router.get('/:usuario', uno);
async function todos(req, res, next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err);
    }
};

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.usuario);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err);
    }
};

module.exports = router;
const db = require('../../DB/mysql');

const TABLA = 'profesor';
module.exports = function (dbinyectada) {

    let db = dbinyectada;

    if(!db) {
        db = require('../../DB/mysql');
    }

    function todos() {
        return db.todos(TABLA);
    }

    function uno(usuario) {
        return db.uno(TABLA, usuario);
    }

    return {
        todos,
        uno
    }
}
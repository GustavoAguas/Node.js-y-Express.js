'use strict';
var express = require('express');
var router = express.Router();

// Ruta principal
router.get('/', function (req, res) {
    res.send('Ruta Principal: El que perdona murio en la cruz :D');
});

// Ruta secundaria
router.get('/ruta-secundaria', function (req, res) {
    res.send('Ruta Secundaria: Dios perdona, pero yo no! ');
});

module.exports = router;
const { Router } = require('express');
const router = Router();

const { createCliente } = require('../controller/index.controller');

router.post('/clientes', createCliente);

module.exports = router;
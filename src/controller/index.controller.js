const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'aeiou2000',
    database: 'tienda',
    port: '5432'
});

const createCliente = async (req, res) => {
    const {cedula, nombre, apellido } = req.body;
    const response = await pool.query('INSERT INTO public."Cliente" ("Cedula", "Nombre", "Apellido") VALUES ($1, $2, $3);', [cedula, nombre, apellido]);
    res.json({
        message: 'Cliente agregado'
    })
};


module.exports = {
    createCliente
};
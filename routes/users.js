const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await db.findAll();
    res.render( 'users', { title: 'Lista de Clientes do USERS', docs } );
  } catch (err) {
    next(err);
  }

});

module.exports = router;

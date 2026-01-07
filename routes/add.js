const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await db.findAll();
    res.render('add', { title: 'Lista de Clientes do ADD', docs});
  } catch(err) {
    next(err);
  }
});

module.exports = router;

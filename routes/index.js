const express = require('express');
const router = express.Router();
const db = require("../db.js");

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await db.findAll();
    // console.log(docs);
    res.render('index', { title: 'Lista de Clientes', docs });
  } catch(err) {
    next(err);
  }
});

module.exports = router;

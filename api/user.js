const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/user.js');
const router = express.Router();

router.post('/', async (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  await User.create(function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  res.json(user);
});

module.exports = router;

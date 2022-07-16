const express = require('express');
const mongoose = require('mongoose');
const Admin = require('../db/admin.js')
const router = express.Router();


router.get('/', async (req, res) => {
  try{
    const data = await Admin.find();
    res.send(data);
  }
  catch(err){
    console.log("Admin get err: ",err);
  }
  
});


router.post('/', async (req, res) => {
  const admin = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    course: req.body.course
  };
  //const adminmodel = Admin(admin);
  //await adminmodel.save(); you can save data to database like this also

  await Admin.create(admin, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  console.log(admin);
  res.send(admin);
});

module.exports = router;

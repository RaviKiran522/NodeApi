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
  res.send(admin);
});


router.put('/:id',async (req,res) => {
  console.log(req.params.id);
  try{
    await Admin.findOneAndUpdate({_id: req.params.id},
      { $set: 
      {firstname: req.body.firstname,
      lastname: req.body.lastname,
      mobile: req.body.mobile,
      course: req.body.course}
    },
    { new: true },
    (err,result)=>{
      console.log("Result: ",result);
    }
    )
  }
  catch(err){
    console.log(err);
  };
  res.json(await Admin.findById(req.params.id));
})


router.delete('/:id',async (req,res)=>{
  try{
    await Admin.findByIdAndDelete(req.params.id);
  }
  catch(err){
    console.log("Err: ",err);
  }
  res.json(await Admin.find());
})


module.exports = router;

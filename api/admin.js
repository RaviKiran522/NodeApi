const express = require('express');
const mongoose = require('mongoose');
const { findById } = require('../db/admin.js');
const Admin = require('../db/admin.js')
const handleValidationError = require('./adminController.js');
const router = express.Router();
const ErrorHandler = require('../utils/errorHandler.js')


router.get('/', async (req, res) => {
  try{
    const data = await Admin.find();
    const result = {
      success: true,
      records: data.length,
      data: data
    }
    res.send(result);
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

  let admindata={};
  //const adminmodel = Admin(admin);
  //await adminmodel.save(); you can save data to database like this also
  try{  
    admindata = await Admin.create(admin);
  }
  catch(err){
    let message = "something went wong";
    console.log("Err: ", err)
    if (err.name == "ValidationError"){
      message = handleValidationError(err);
    } 
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
  res.send(admindata);
});


router.put('/:id',async (req,res,next) => {
  console.log(req.params.id);
    const admin = await Admin.findById(req.params.id,(err,result)=>{
      if(err){
        return next(new ErrorHandler("admin is not found", 404));
      }
    }).clone();
    if(admin==null){
      return next(new ErrorHandler("admin is not found", 404));
    }
    console.log("Admin: ",admin);

    await Admin.findByIdAndUpdate(req.params.id,
      {firstname: req.body.firstname,
      lastname: req.body.lastname,
      mobile: req.body.mobile,
      course: req.body.course
    },
    { new: true,
      runValidators: true,
      useFindAndModify: false 
    });

  res.json({firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    course: req.body.course});
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

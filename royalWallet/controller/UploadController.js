const multer = require("multer");
const path = require("path");
const gdriveController = require('./GDriveUploadConroller')
const userSchema = require('../model/UserSchema');
const e = require("express");



const storage = multer.diskStorage({
    destination:'./uploads',
    filename: (req, file, ab) => {
      ab(null, file.originalname);
    },
  });
  
  const upload = multer(
  {
    storage: storage,
    limits: { fileSize: 900000000 },
  
  }).single("file");



exports.uploadFile = (req, res) => {

  console.log("uname ---- ",req.headers.uname)

  //update storage limit

  function st ()
  {
    var c = userSchema.findOne({username:req.headers.uname})
    console.log("cccccccc",c.then(res=>{
      console.log("promise  ",res)
      return res.storageLimit
  })
  ) 

  // console.log("jkcdcc",c)
  }

  var x =st()
  console.log("storage call ",x )


  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    } 
    else {
      
      var c =userSchema.findOne({username:req.headers.uname})
      c.then(res1=>{
        // console.log("promise  ",res1)
        userSchema.updateOne({username:req.headers.uname},{storageLimit:res1.storageLimit-req.file.size},(err,success)=>{
          if(err){
            res.status(500).json({
              message:"Error..."
            })
          }
          else
          {
            console.log("updated...")
          }
        })
    })

      

      if(req.file.mimetype == 'image/jpeg' || req.file.mimetype=='application/pdf'){
      res.json({
        file: req.file,
        message: "File uploaded successfully",
      })
      

      gdriveController.uploadFile(req.file.path)
    }
    else{
      res.json({
        message:"File Format not supported"
      })
    }
    }
  });
};
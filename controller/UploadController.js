const multer = require("multer");
const path = require("path");
const gdriveController = require('./GDriveUploadConroller');
const xlsx = require("xlsx");
const questionSchema = require('../model/QuestionSchema')


const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, ab) => {
    ab(null, file.originalname);
  },
});

const upload = multer(
  {
    storage: storage,
    limits: { fileSize: 9000000 },

  }).single("file");

const readDataFromFile = (file1) => {

  const file = xlsx.readFile(file1)
  const sheets = file.SheetNames
  var data = []

  for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])

    temp.forEach((t) => {
      data.push(t)
    })
  }

  // console.log('type',data[0].options.split(',')) ----options Array 
  // example of that aray======[ 'gujarat', 'gandhinagar', 'delhi', 'goa' ]

  data.map((d) => {
    var opt = []
    opt = d.options.split(',')
    d.options = opt
  })
  console.log('final to db', data)
  return data
}


exports.uploadFile = (req, res) => {

  upload(req, res, (err) => {

    var data1 = readDataFromFile(req.file.path);
    // console.log(data1);
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    else {
      res.json({
        file: req.file,
        message: "File uploaded successfully",
      })

      // UPLOAD TO GOOGLE DRIVE

      // gdriveController.uploadFile(req.file.path)
    }
  });
};

exports.AddQuestionsFromFile =  (req, res) => {
    
    var path = req.body.path

    var data = readDataFromFile(path); 

    questionSchema.insertMany(data, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occurred while creating the data.",
            })
        }
        else {
            res.status(200).json({
                message: "Data inserted successfully",
                data: result
            })
        }
    })
}
/* When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE),
 we need to determine how the server will reponse by setting up the routes.

These are our routes:

/api/members: GET, POST, DELETE
/api/members/:id: GET, PUT, DELETE
/api/members/published: GET
 */

var router = require("express").Router();

const {
  setMember,
  getAllMembers,
  getImgProfile,
  deleteMember
} = require('../controllers/member.controller')

const multer = require('multer')
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Buffer.from(file.originalname, 'latin1').toString('utf8'));
  },
});

const upload = multer({storage: storage}); //multer({ dest: 'uploads/' })

// Create a new Member
const multipleUpload = upload.fields([{name: 'imgProfil'}, {name: 'extraitNaissance'}]);
router.post("/", multipleUpload, setMember);

// Retrieve all Members
router.route("/").get(getAllMembers);

// Retrieve imgProfil of a member
router.route("/imgProfile/:path").get(getImgProfile);

// Delete a Member with id
router.delete("/:id", deleteMember);

// Retrieve all published Members
//router.get("/published", membersController.findAllPublished);
// Retrieve a single Member with id
//router.get("/:id", membersController.findOne);
// Update a Member with id
//router.put("/:id", membersController.update);

// Create a new Member
//router.delete("/", membersController.deleteAll);

module.exports = router;


/*
(req, res, function (error) {
  if (error instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    console.log('A Multer error occurred when uploading' + error)
    res.send(error)
  } else if(error === 'LIMIT_FILE_SIZE') {
        req.fileSizeError = "Image more than 1MB!";
        console.log("Image more than 1MB!")
        res.status(500).send({message:req.fileSizeError});
      } else {
    console.log(error)
    console.log('File Received!');
    console.log(req.file);
  }
  setMember()
}*/

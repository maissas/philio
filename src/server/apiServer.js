
const express = require("express");
const cors = require("cors");
const bodyParser = require("express");

const app = express();

require('dotenv').config({ path: 'ENV_FILENAME' });

const connectDB = require('../app/models/index')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI =  require('swagger-ui-express')

app.use(cors())
app.options('*', cors())
// parse requests of content-type - application/json
//app.use(bodyParser.json({limit: '50mb'}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true,  parameterLimit:50000}));

app.use(express.static('public'));
app.use('/images', express.static('uploads'));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to philio server " });
});

//router
app.use("/api/members", require("../app/routes/members-routes"));

app.set("view engine", "ejs");

//var fileupload = require("express-fileupload");
//app.use(fileupload());

//hethi li mat5alich b9iet les routes yet9raw ba3dha
app.use((req,res,next)=>{
  res.header('Content-Type','application/json');
  res.end()
  next();
});

/*
app.use(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  next();
});*/

//Connection database
connectDB()
  .then(() => {
  console.log("Connected to the database!");
})
  .catch(err => {
    console.log("Cannot connect to the database :/ ", err);
    process.exit();
  });

//Add swagger
//const swaggerUi = require('swagger-ui-express')
//swaggerDocument = require('./swagger.json')
//app.get("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)) //doc mouch kamel

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app


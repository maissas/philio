const serverless = require('serverless-http')
const express = require("express");
const cors = require("cors");
const bodyParser = require("express");

const app = express();

require('dotenv').config({ path: 'ENV_FILENAME' });

const connectDB = require('./models')

console.log("going to connect to db ..")

//Connection database
connectDB()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database :/ ", err);
    process.exit();
  });


app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true,  parameterLimit:50000}));

app.use(express.static('public'));
app.use('/images', express.static('uploads'));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to philio server " });
});

//router
app.use("/.netlify/functions/apiServer/api/members", require("./routes/members-routes"));

app.set("view engine", "ejs");

//hethi li mat5alich b9iet les routes yet9raw ba3dha
app.use((req,res,next)=>{
  res.header('Content-Type','application/json');
  res.end()
  next();
});


//module.exports = app


// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports.handler = serverless(app);




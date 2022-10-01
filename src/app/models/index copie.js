//import * as path from "path";

//const dbConfig = require("../config/db.config.js");

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try{
    const mongodb = await mongoose.connect("mongodb://localhost:27017/philio_db", {useNewUrlParser: true, useUnifiedTopology: true})
    console.log(`MongoDB connected: ${mongodb.connection.host}`)
  }catch(error){
    console.log(`MongoDB NOT connected !`)
    console.log(error)
    process.exist(1)
  }
}
module.exports = connectDB

/*
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/philio_db" //dbConfig.url;
db.members = require("./member.model");

module.exports = db;
*/

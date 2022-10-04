const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try{
    const dbURI = process.env.MONGODB_URI;
      //"mongodb+srv://maissa-admin:MKEsa12*@cluster0.oojg7l5.mongodb.net/philio_db_atlas?retryWrites=true&w=majority"
    const mongodb = await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
    console.log(`MongoDB connected: ${mongodb.connection.host}`)
  }catch(error){
    console.log(`MongoDB NOT connected !`)
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB


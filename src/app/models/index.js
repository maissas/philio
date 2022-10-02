const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try{
    const dbURI = process.env.MONGODB_URI;
      //"mongodb+srv://maissa-admin:MKEsa12*@cluster0.oojg7l5.mongodb.net/philio_db_atlas?retryWrites=true&w=majority"
    const mongodb = await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log(`MongoDB connected: ${mongodb.connection.host}`)
  }catch(error){
    console.log(`MongoDB NOT connected !`)
    console.log(error)
    process.exist(1)
  }
}
module.exports = connectDB


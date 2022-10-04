const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config()

const dbURI = process.env.MONGODB_URI;
const client = new MongoClient(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try{
    await client.connect();
  }catch(error){
    console.log(`MongoDB NOT connected !`)
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB


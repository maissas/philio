const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config()

mongoose.Promise = global.Promise;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

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


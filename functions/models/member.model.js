//this model is used by the server to create the class Member in DB


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = Schema(
    {
      nomClient:  {
        type: String,
        required: true
      },
      prenomClient:  {
        type: String,
        required: true
      },
      adresse:  {
        type: String,
        required: true
      },
      ancienneActSportive:  {
        type: String,
        required: true
      },
      dateNaissance:  {
        type: String,
        required: true
      },
      nomPere:  {
        type: String,
        required: true
      },
      prenomPere:  {
        type: String,
        required: true
      },
      emailPere:  {
        type: String,
        required: true
      },
      numTelPere:  {
        type: String,
        required: true
      },
      travailPere:  {
        type: String,
        required: true
      },
      nomMere:  {
        type: String,
        required: true
      },
      prenomMere:  {
        type: String,
        required: true
      },
      emailMere:  {
        type: String,
        required: true
      },
      numTelMere:  {
        type: String,
        required: true
      },
      travailMere:  {
        type: String,
        required: true
      },
      imageProfilePath:  {
        type: String,
        required: true
      },
      imageExtraitNaissancePath:  {
        type: String,
        required: false,
        default: "none"
      }
    },
    { timestamps: true
    }
)

module.exports = mongoose.model("Member", MemberSchema)


//imgProfil: String,
//extraitNaissance: String,
//imgProfilPath:  String,
//extraitNaissancePath: String,

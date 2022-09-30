//this model is used by the server to create the class Member in DB


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MemberSchema = Schema(
    {
      nomClient: String,
      prenomClient: String,
      adresse: String,
      ancienneActSportive: String,
      dateNaissance: String,
      imgProfil: String,
      extraitNaissance: String,
      imgProfilPath:  String,
      extraitNaissancePath: String,
      nomPere: String,
      prenomPere: String,
      emailPere: String,
      numTelPere: String,
      travailPere: String,
      nomMere: String,
      prenomMere: String,
      emailMere: String,
      numTelMere: String,
      travailMere: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema)

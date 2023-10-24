const mongoose = require('mongoose');


const PasswordSchema = new mongoose.Schema({
  password: Number,
  active: Boolean,
});

 const WiFiPassword= mongoose.model("Password ", PasswordSchema, "Wi-Fi Password");
 module.exports =WiFiPassword
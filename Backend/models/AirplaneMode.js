const mongoose = require('mongoose');

const AirplaneModeSchema = new mongoose.Schema({
    isAirplaneModeOn: Boolean,
  });
  const AirplaneMode = mongoose.model("AirplaneMode", AirplaneModeSchema , "Airplane Mode");
  module.exports=AirplaneMode ; 




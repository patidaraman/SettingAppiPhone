const mongoose = require('mongoose');

const AirplaneModeSchema = new mongoose.Schema({
    isAirplaneModeOn: Boolean,
  });
  const AirplaneMode = mongoose.model("AirplaneMode", AirplaneModeSchema , "AirplaneMode");
 module.exports = AirplaneMode
const mongoose = require("mongoose");

const MobileDataSchema = new mongoose.Schema({
  isMobileDataOn: Boolean,
//   isDataRoamingOn: Boolean,
});

const MobileData = mongoose.model( "MobileData",MobileDataSchema,"Mobile Data");
module.exports = MobileData;

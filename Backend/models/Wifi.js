const mongoose = require('mongoose');

const WiFiSchema = new mongoose.Schema({
    isWiFiOn: Boolean,
  });
  const WiFi = mongoose.model("WiFi", WiFiSchema , "Wi-Fi");
  module.exports=WiFi
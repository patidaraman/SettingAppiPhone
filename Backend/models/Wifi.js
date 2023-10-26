const mongoose = require("mongoose");

const WiFiSchema = new mongoose.Schema({
  isWiFiOn: {
    type: Boolean,
    default: false,
  },
  autoJoinHotspot: {
    type: String,
    enum: ["Never", "AskToJoin", "Automatic"],
    default: "Never",
  },
});
const WiFi = mongoose.model("WiFi", WiFiSchema, "Wi-Fi");
module.exports = WiFi;

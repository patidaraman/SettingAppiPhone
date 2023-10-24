const mongoose = require('mongoose');

const HostpotSchema = new mongoose.Schema({
    isHotspotOn: Boolean,
  });
  const Hotspot = mongoose.model("Hotspot", HostpotSchema , "Hotspot");
 module.exports = Hotspot
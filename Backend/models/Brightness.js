const mongoose = require('mongoose');

const brightnessSchema = new mongoose.Schema({
    brightnessLevel: Number,
    timestamp: { type: Date, default: Date.now },
  });

  const BrightnessModel = mongoose.model('Brightness', brightnessSchema , "Brightness");
  module.exports= BrightnessModel

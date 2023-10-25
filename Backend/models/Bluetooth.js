const mongoose = require('mongoose');

const BluetoothSchema = new mongoose.Schema({
    isBluetoothOn: Boolean,
  });
  const Bluetooth = mongoose.model("Bluetooth", BluetoothSchema , "Bluetooth");
  module.exports=Bluetooth
  


  
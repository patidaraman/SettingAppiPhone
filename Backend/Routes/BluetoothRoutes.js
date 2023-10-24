const express = require("express");
const bluetoothRouter = express.Router();
const BluetoothModle = require('../models/Bluetooth')




bluetoothRouter.post("/bluetooth", async (req, res) => {
    try {
       const BTdata = new BluetoothModle({
           
              isBluetoothOn: req.body.isBluetoothOn,
              });
              console.log("Bluetooth triggered");
              const BTcond = await BTdata.save();
              res.json(BTcond); 
     } catch (error) {
       console.error('Error storing data:', error);
       res.status(500).send('Internal Server Error');
     } 
});

module.exports = bluetoothRouter
const express = require("express");
const bluetoothRouter = express.Router();
const BluetoothModle = require('../models/Bluetooth')



bluetoothRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await BluetoothModle.findOne();
    if (existingRecord) {
      res.json({ isBluetoothOn: existingRecord.isBluetoothOn });
    } else {
      res.status(404).json({ error: "Bluetooth  state not found" });
    }
  } catch (error) {
    console.error('Error fetching Bluetooth setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




bluetoothRouter.post("/", async (req, res) => {
  try {
      const { isBluetoothOn } = req.body;

      // Find the existing record, or create one if it doesn't exist
      let existingRecord = await BluetoothModle.findOne();
      if (!existingRecord) {
          existingRecord = new BluetoothModle();
      }

      // Update the Bluetooth state
      existingRecord.isBluetoothOn = isBluetoothOn;

      await existingRecord.save();

      res.json(existingRecord);
  } catch (error) {
      console.error('Error updating Hotspot setting:', error);
      res.status(500).send('Internal Server Error');
  }
});



module.exports = bluetoothRouter
const express = require("express");
const wifiRouter = express.Router();
const WiFiModle = require('../models/Wifi')





wifiRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await WiFiModle.findOne();
    if (existingRecord) {
      res.json({ isWiFiOn: existingRecord.isWiFiOn });
    } else {
      res.status(404).json({ error: "WiFi state not found" });
    }
  } catch (error) {
    console.error('Error fetching WiFi  setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



wifiRouter.post("/", async (req, res) => {
  try {
      const { isWiFiOn } = req.body;

      // Find the existing record, or create one if it doesn't exist
      let existingRecord = await WiFiModle.findOne();
      if (!existingRecord) {
          existingRecord = new WiFiModle();
      }

      // Update the hotspot state
      existingRecord.isWiFiOn = isWiFiOn;

      await existingRecord.save();

      res.json(existingRecord);
  } catch (error) {
      console.error('Error updating Hotspot setting:', error);
      res.status(500).send('Internal Server Error');
  }
});



wifiRouter.post("/autojoin", async (req, res) => {
  try {
    const { autoJoinHotspot } = req.body;
    let setting = await WiFiModle.findOne();

    if (!setting) {
      setting = new WiFiModle({ autoJoinHotspot });
    } else {
      setting.autoJoinHotspot = autoJoinHotspot;
    }

    await setting.save();
    res.json({ autoJoinHotspot: setting.autoJoinHotspot });
  } catch (error) {
    console.error("Error updating Auto-Join Hotspot setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

wifiRouter.get("/autojoin", async (req, res) => {
  try {
    const setting = await WiFiModle.findOne();
    res.json({ autoJoinHotspot: setting ? setting.autoJoinHotspot : false });
  } catch (error) {
    console.error("Error fetching Auto-Join Hotspot setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





module.exports = wifiRouter
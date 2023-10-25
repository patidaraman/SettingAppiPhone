const express = require("express");
const hotspotRouter = express.Router();
const HotspotModle = require('../models/Hotspot')



hotspotRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await HotspotModle.findOne();
    if (existingRecord) {
      res.json({ isHotspotOn: existingRecord.isHotspotOn });
    } else {
      res.status(404).json({ error: "Hotspot state not found" });
    }
  } catch (error) {
    console.error('Error fetching Hotspot setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




hotspotRouter.post("/", async (req, res) => {
  try {
    const { isHotspotOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await HotspotModle.findOne();
    if (!existingRecord) {
      existingRecord = new HotspotModle();
    }

    // Update the hotspot state
    existingRecord.isHotspotOn = isHotspotOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error('Error updating Hotspot setting:', error);
    res.status(500).send('Internal Server Error');
  }
});







module.exports = hotspotRouter




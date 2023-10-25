const express = require("express");
const mobiledataRouter = express.Router();
const MobileDataModle = require("../models/MobileData");


mobiledataRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isMobileDataOn: existingRecord.isMobileDataOn });
    } else {
      res.status(404).json({ error: "mobile data state not found" });
    }
  } catch (error) {
    console.error('Error fetching Mobile data  setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



mobiledataRouter.post("/", async (req, res) => {
  try {
      const { isMobileDataOn } = req.body;

      // Find the existing record, or create one if it doesn't exist
      let existingRecord = await MobileDataModle.findOne();
      if (!existingRecord) {
          existingRecord = new MobileDataModle();
      }

      // Update the hotspot state
      existingRecord.isMobileDataOn = isMobileDataOn;

      await existingRecord.save();

      res.json(existingRecord);
  } catch (error) {
      console.error('Error updating Hotspot setting:', error);
      res.status(500).send('Internal Server Error');
  }
});


module.exports = mobiledataRouter;

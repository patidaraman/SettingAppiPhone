const express = require("express");
const shRouter = express.Router();
const SHModle = require('../models/Sound')



shRouter.post("/vibratering", async (req, res) => {
    try {
        const { isVibrateRingOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the hotspot state
        existingRecord.isVibrateRingOn = isVibrateRingOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Vibrate on ring setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });

  shRouter.get("/vibratering", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isVibrateRingOn: existingRecord.isVibrateRingOn });
      } else {
        res.status(404).json({ error: "Vibrate on ring state not found" });
      }
    } catch (error) {
      console.error('Error fetching Vibrate on ring setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });







  shRouter.post("/vibratesilent", async (req, res) => {
    try {
        const { isVibrateSilentOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the hotspot state
        existingRecord.isVibrateSilentOn = isVibrateSilentOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Vibrate on Silent setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });

  shRouter.get("/vibratesilent", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isVibrateSilentOn: existingRecord.isVibrateSilentOn });
      } else {
        res.status(404).json({ error: "Vibrate on silent state not found" });
      }
    } catch (error) {
      console.error('Error fetching Vibrate on silent setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });














  shRouter.post("/changebutton", async (req, res) => {
    try {
        const { isChangeWithButtonOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the hotspot state
        existingRecord.isChangeWithButtonOn = isChangeWithButtonOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating change with button setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });


  shRouter.get("/changebutton", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isChangeWithButtonOn: existingRecord.isChangeWithButtonOn });
      } else {
        res.status(404).json({ error: "change with button state not found" });
      }
    } catch (error) {
      console.error('Error fetching change with button setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });







  shRouter.post("/keyboard", async (req, res) => {
    try {
        const { isKeyboardClicksOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the Keyboard clicks  state
        existingRecord.isKeyboardClicksOn = isKeyboardClicksOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Keyboard Clicks setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });
  

  shRouter.get("/keyboard", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isKeyboardClicksOn: existingRecord.isKeyboardClicksOn });
      } else {
        res.status(404).json({ error: "Keyboard Clicks state not found" });
      }
    } catch (error) {
      console.error('Error fetching Keyboard Clicks setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });









  shRouter.post("/locksound", async (req, res) => {
    try {
        const { isLockSoundOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the Keyboard clicks  state
        existingRecord.isLockSoundOn = isLockSoundOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Keyboard Clicks setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });
  

  shRouter.get("/locksound", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isLockSoundOn: existingRecord.isLockSoundOn });
      } else {
        res.status(404).json({ error: "Lock Sound On state not found" });
      }
    } catch (error) {
      console.error('Error fetching Lock Sound On setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  







  shRouter.post("/system", async (req, res) => {
    try {
        const { isSystemHapticsOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await SHModle.findOne();
        if (!existingRecord) {
            existingRecord = new SHModle();
        }
  
        // Update the Keyboard clicks  state
        existingRecord.isSystemHapticsOn = isSystemHapticsOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating System Haptics On:', error);
        res.status(500).send('Internal Server Error');
    }
  });
  

  shRouter.get("/system", async  (req, res) => {
    try {
      const existingRecord = await SHModle.findOne();
      if (existingRecord) {
        res.json({ isSystemHapticsOn: existingRecord.isSystemHapticsOn });
      } else {
        res.status(404).json({ error: "System Haptics On state not found" });
      }
    } catch (error) {
      console.error('Error fetching System Haptics On setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports= shRouter
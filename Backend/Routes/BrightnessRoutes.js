const express = require("express");
const brightnessRouter = express.Router();
const BrightnessModel = require('../models/Brightness')


const fixedBrightnessId = "fixed-brightness";

brightnessRouter.post('/brightness', async (req, res) => {
    const { brightness } = req.body;

    try {
      // Check if the brightness data with the fixed ID already exists
      let existingData = await BrightnessModel.findOne({ _id: fixedBrightnessId });
      
      if (!existingData) {
        // If it doesn't exist, create a new document
        existingData = new BrightnessModel({ _id: fixedBrightnessId, brightnessLevel: brightness });
      } else {
        // Update the existing document
        existingData.brightnessLevel = brightness;
      }
      
      const savedData = await existingData.save();
      console.log(req.body);
      res.json({ message: 'Brightness data received and saved', brightnessLevel: savedData.brightnessLevel });
    } catch (error) {
      console.error('Error saving brightness data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
   
  });





  brightnessRouter.get('/brightness', async (req, res) => {
    try {
      // Retrieve the last saved brightness level from the database
      const lastBrightnessData = await BrightnessModel.findOne().sort({ timestamp: -1 });
      res.json({ brightnessLevel: lastBrightnessData.brightnessLevel });
    } catch (error) {
      console.error('Error fetching brightness data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




module.exports = brightnessRouter
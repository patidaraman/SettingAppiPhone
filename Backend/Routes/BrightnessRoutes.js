const express = require("express");
const brightnessRouter = express.Router();
const BrightnessModel = require('../models/Brightness')




brightnessRouter.post('/brightness', async (req, res) => {
    const { brightness } = req.body;
  
    const newBrightnessData = new BrightnessModel({
      brightnessLevel: brightness,
    });
  
    try {
      const savedData = await newBrightnessData.save();
      console.log(req.body);
      res.json({ message: 'Brightness data received and saved' });
    } catch (error) {
      console.error('Error saving brightness data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = brightnessRouter
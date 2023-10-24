const express = require("express");
const wifiRouter = express.Router();
const WiFiModle = require('../models/Wifi')



wifiRouter.post("/wifi", async (req, res) => {
    try {
       const WFdata = new WiFiModle({
           
              isWiFiOn: req.body.isWiFiOn,
              });
              console.log("Wi-Fi  triggered");
              const WFcond = await WFdata.save();
              res.json(WFcond); 
     } catch (error) {
       console.error('Error storing data:', error);
       res.status(500).send('Internal Server Error');
     } 
});

module.exports = wifiRouter
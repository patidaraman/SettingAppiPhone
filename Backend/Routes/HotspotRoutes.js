const express = require("express");
const hotspotRouter = express.Router();
const HotspotModle = require('../models/Hotspot')




hotspotRouter.post("/hotspot", async (req, res) => {
    try {
       const Hdata = new HotspotModle({
           
              isHotspotOn: req.body.isHotspotOn,
              });
              console.log("Hotspot triggered");
              const Hcond = await Hdata.save();
              res.json(Hcond); 
     } catch (error) {
       console.error('Error storing data:', error);
       res.status(500).send('Internal Server Error');
     } 
});

module.exports = hotspotRouter
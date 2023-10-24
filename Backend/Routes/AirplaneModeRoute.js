const express = require("express");
const airplanemodeRouter = express.Router();
const  AirplaneModeModle = require("../models/AirplaneMode")





airplanemodeRouter.post("/airplanemode", async (req, res) => {
    try {
       const AMdata = new AirplaneModeModle({
           
              isAirplaneModeOn: req.body.isAirplaneModeOn,
              });
              console.log("Airplane Mode triggered");
              const AMcond = await AMdata.save();
              res.json(AMcond); 
     } catch (error) {
       console.error('Error storing data:', error);
       res.status(500).send('Internal Server Error');
     } 
});

module.exports = airplanemodeRouter
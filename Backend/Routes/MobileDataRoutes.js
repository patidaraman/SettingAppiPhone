const express = require("express");
const mobiledataRouter = express.Router();
const MobileDataModle = require("../models/MobileData");

mobiledataRouter.post("/mobiledata", async (req, res) => {
  try {
    const MDdata = new MobileDataModle({
      isMobileDataOn: req.body.isMobileDataOn,
    });
    console.log("Mobile Data  triggered");
    const MDcond = await MDdata.save();
    res.json(MDcond);
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// mobiledataRouter.post("/dataoption", async (req, res) => {
//   try {
//     const DOdata = new DataOptionModle({
//       isDataOptionOn: req.body.isDataOptionOn,
//     });
//     console.log(" Data Roaming triggered");
//     const DOcond = await DOdata.save();
//     res.json(DOcond);
//   } catch (error) {
//     console.error("Error storing data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = mobiledataRouter;

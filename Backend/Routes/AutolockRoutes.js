// const express = require("express");
// const Arouter = express.Router();
// const AutolockModle = require('../models/D&B')


// Arouter.post("/autolock", async (req, res) => {
//     try {
//       const { selectedTime } = req.body;
//       console.log(req.body);
  
//       // Find the existing record or create one if it doesn't exist
//       let existingRecord = await AutolockModle.findOne();
//       if (!existingRecord) {
//         existingRecord = new AutolockModle();
//       }
  
//       // Update the auto-lock time
//       existingRecord.selectedTime = selectedTime;
  
//       await existingRecord.save();
  
//       res.json(existingRecord);
//     } catch (error) {
//       console.error("Error updating Auto-Lock time:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
  
//   // Get the selected auto-lock time
//   Arouter.get("/autolock", async (req, res) => {
//     try {
//       const existingRecord = await AutolockModle.findOne();
//       if (existingRecord) {
//         res.json({ selectedTime: existingRecord.selectedTime });
//       } else {
//         res.status(404).json({ error: "Auto-Lock time not found" });
//       }
//     } catch (error) {
//       console.error("Error fetching Auto-Lock time:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

// module.exports= Arouter
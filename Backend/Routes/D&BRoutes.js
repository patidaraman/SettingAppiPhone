const express = require("express");
const router = express.Router();
const DBModle = require('../models/D&B')





router.post("/automatic", async (req, res) => {
    try {
        const { isAutomaticOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await DBModle.findOne();
        if (!existingRecord) {
            existingRecord = new DBModle();
        }
  
        // Update the hotspot state
        existingRecord.isAutomaticOn = isAutomaticOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating is Automatic  setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });

  router.get("/automatic", async (req, res) => {
    try {
      const existingRecord = await DBModle.findOne();
      if (existingRecord) {
        res.json({ isAutomaticOn: existingRecord.isAutomaticOn });
      } else {
        res.status(404).json({ error: "Automatic state not found" });
      }
    } catch (error) {
      console.error('Error fetching Automatic  setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  





  router.post("/raisetowake", async (req, res) => {
    try {
        const { isRaisetoWakeOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await DBModle.findOne();
        if (!existingRecord) {
            existingRecord = new DBModle();
        }
  
        // Update the RaisetoWakeOn state
        existingRecord.isRaisetoWakeOn = isRaisetoWakeOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Hotspot setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });

  router.get("/raisetowake", async (req, res) => {
    try {
      const existingRecord = await DBModle.findOne()
      if (existingRecord) {
        res.json({ isRaisetoWakeOn: existingRecord.isRaisetoWakeOn });
      } else {
        res.status(404).json({ error: "Raise to wake  state not found" });
      }
    } catch (error) {
      console.error('Error fetching Raise to wake setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });





  router.post("/boldtext", async (req, res) => {
    try {
      const { isBoldTextOn } = req.body;
  
      // Find the existing record, or create one if it doesn't exist
      let existingRecord = await DBModle.findOne();
      if (!existingRecord) {
        existingRecord = new DBModle();
      }
  
      // Update the hotspot state
      existingRecord.isBoldTextOn = isBoldTextOn;
  
      await existingRecord.save();
  
      res.json(existingRecord);
    } catch (error) {
      console.error("Error updating Hotspot setting:", error);
      res.status(500).send("Internal Server Error");
    }
  });


  router.get("/boldtext", async (req, res) => {
    try {
      const existingRecord = await DBModle.findOne();
      if (existingRecord) {
        res.json({ isBoldTextOn: existingRecord.isBoldTextOn });
      } else {
        res.status(404).json({ error: "Bold Text state not found" });
      }
    } catch (error) {
      console.error('Error fetching Bold Text setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




  router.post("/scheduled", async (req, res) => {
    try {
        const { isScheduledOn } = req.body;
        console.log(req.body);
  
        // Find the existing record, or create one if it doesn't exist
        let existingRecord = await DBModle.findOne();
        if (!existingRecord) {
            existingRecord = new DBModle();
        }
  
        // Update the RaisetoWakeOn state
        existingRecord.isScheduledOn = isScheduledOn;
  
        await existingRecord.save();
  
        res.json(existingRecord);
    } catch (error) {
        console.error('Error updating Hotspot setting:', error);
        res.status(500).send('Internal Server Error');
    }
  });

  

  router.get("/scheduled", async (req, res) => {
    try {
      const existingRecord = await DBModle.findOne();
      if (existingRecord) {
        res.json({ isScheduledOn: existingRecord.isScheduledOn });
      } else {
        res.status(404).json({ error: "Scheduled state not found" });
      }
    } catch (error) {
      console.error('Error fetching Scheduled setting:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });






























  router.post("/autolock", async (req, res) => {
    try {
      const { selectedTime } = req.body;
      console.log(req.body);
  
      // Find the existing record or create one if it doesn't exist
      let existingRecord = await DBModle.findOne();
      if (!existingRecord) {
        existingRecord = new DBModle();
      }
  
      // Update the auto-lock time
      existingRecord.selectedTime = selectedTime;
  
      await existingRecord.save();
  
      res.json(existingRecord);
    } catch (error) {
      console.error("Error updating Auto-Lock time:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  
  // Get the selected auto-lock time
  router.get("/autolock", async (req, res) => {
    try {
      const existingRecord = await DBModle.findOne();
    
      if (existingRecord) {
        res.json({ selectedTime: existingRecord.selectedTime });
      } else {
        res.status(404).json({ error: "Auto-Lock time not found" });
      }
    } catch (error) {
      console.error("Error fetching Auto-Lock time:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });








   // Text Size

   router.post('/textsize', async (req, res) => {
    try {
      const { size } = req.body;
      console.log(req.body)
      let textSettings = await DBModle.findOne();
  
      if (!textSettings) {
        textSettings = new DBModle({TextSize: size });
      } else {
        textSettings.TextSize = size;
      }
      await textSettings.save();
      res.json({ size: textSettings.TextSize });
    } catch (error) {
      console.error('Error updating text size:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

 


  // Get the current text size
router.get('/textsize', async (req, res) => {
  try {
    const textSettings= await DBModle.findOne();
    if(textSettings){
      
        res.json({ size: textSettings ? textSettings.size : 16 }); // Return the text size or a default value
   } else {
             res.status(404).json({ error: "Auto-Lock time not found" });
          }
  } catch (error) {
    console.error('Error fetching text size:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});












//   router.post("/manually", async (req, res) => {
//     try {
//         const { isManuallyOn } = req.body;
//         console.log(req.body);
  
//         // Find the existing record, or create one if it doesn't exist
//         let existingRecord = await DBModle.findOne();
//         if (!existingRecord) {
//             existingRecord = new DBModle();
//         }
  
//         // Update the Manually state
//         existingRecord.isManuallyOn = isManuallyOn;
  
//         await existingRecord.save();
  
//         res.json(existingRecord);
//     } catch (error) {
//         console.error('Error updating Manually  setting:', error);
//         res.status(500).send('Internal Server Error');
//     }
//   });
 

//   router.get("/manually", async (req, res) => {
//     try {
//       const existingRecord = await DBModle.findOne();
//       if (existingRecord) {
//         res.json({ isManuallyOn: existingRecord.isManuallyOn });
//       } else {
//         res.status(404).json({ error: "Manually state not found" });
//       }
//     } catch (error) {
//       console.error('Error fetching Manually setting:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });




















 


module.exports = router;

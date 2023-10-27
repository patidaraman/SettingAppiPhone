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
    console.error("Error fetching Mobile data  setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating Hotspot setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.post("/dataroaming", async (req, res) => {
  try {
    const { isDataRoamingOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isDataRoamingOn = isDataRoamingOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating Data Roaming  setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/dataroaming", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isDataRoamingOn: existingRecord.isDataRoamingOn });
    } else {
      res.status(404).json({ error: " data  roaming state not found" });
    }
  } catch (error) {
    console.error("Error fetching  data  roaming setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/lowdata", async (req, res) => {
  try {
    const { isLowDataModeOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isLowDataModeOn = isLowDataModeOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating Data Roaming  setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/lowdata", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isLowDataModeOn: existingRecord.isLowDataModeOn });
    } else {
      res.status(404).json({ error: "Low Data Mode On state not found" });
    }
  } catch (error) {
    console.error("Error fetching Low Data Mode On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/IP", async (req, res) => {
  try {
    const { isLimitIPAddressTrackingOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isLimitIPAddressTrackingOn = isLimitIPAddressTrackingOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating Data Roaming  setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/IP", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({
        isLimitIPAddressTrackingOn: existingRecord.isLimitIPAddressTrackingOn,
      });
    } else {
      res
        .status(404)
        .json({ error: " Limit IP Address Tracking On state not found" });
    }
  } catch (error) {
    console.error(
      "Error fetching Limit IP Address Tracking On   setting:",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/network", async (req, res) => {
  try {
    const { isNetworkSelectionOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isNetworkSelectionOn = isNetworkSelectionOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating Data Roaming  setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/network", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isNetworkSelectionOn: existingRecord.isNetworkSelectionOn });
    } else {
      res.status(404).json({ error: " Network Selection On state not found" });
    }
  } catch (error) {
    console.error("Error fetching Network Selection On  setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/volte", async (req, res) => {
  try {
    const { isVoLTEOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isVoLTEOn = isVoLTEOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating VoLTE On setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/volte", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isVoLTEOn: existingRecord.isVoLTEOn });
    } else {
      res.status(404).json({ error: " VoLTE On state not found" });
    }
  } catch (error) {
    console.error("Error fetching VoLTE On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/calling", async (req, res) => {
  try {
    const { isCallingWiFiOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isCallingWiFiOn = isCallingWiFiOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating Calling WiFi On setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/calling", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isCallingWiFiOn: existingRecord.isCallingWiFiOn });
    } else {
      res.status(404).json({ error: " VoLTE On state not found" });
    }
  } catch (error) {
    console.error("Error fetching Calling WiFi On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/other", async (req, res) => {
  try {
    const { isAllowCallsonOtherDevicesOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isAllowCallsonOtherDevicesOn = isAllowCallsonOtherDevicesOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error Allow Calls on Othe rDevices On setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/other", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({
        isAllowCallsonOtherDevicesOn:
          existingRecord.isAllowCallsonOtherDevicesOn,
      });
    } else {
      res
        .status(404)
        .json({ error: " Allow Calls on Other DeviceO n state not found" });
    }
  } catch (error) {
    console.error(
      "Error fetching Allow Calls on Other Devices On setting:",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/mac", async (req, res) => {
  try {
    const { isAllowCallsOnMacBookOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isAllowCallsOnMacBookOn = isAllowCallsOnMacBookOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error Allow Calls On MacBook On setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/mac", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({
        isAllowCallsOnMacBookOn: existingRecord.isAllowCallsOnMacBookOn,
      });
    } else {
      res
        .status(404)
        .json({ error: " Allow Calls On MacBook On state not found" });
    }
  } catch (error) {
    console.error("Error fetching  Allow Calls On MacBook On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mobiledataRouter.post("/sim", async (req, res) => {
  try {
    const { isSimPinOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the hotspot state
    existingRecord.isSimPinOn = isSimPinOn;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error Sim Pin On setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/sim", async (req, res) => {
  try {
    const existingRecord = await MobileDataModle.findOne();
    if (existingRecord) {
      res.json({ isSimPinOn: existingRecord.isSimPinOn });
    } else {
      res.status(404).json({ error: " Sim Pin On state not found" });
    }
  } catch (error) {
    console.error("Error fetching Sim Pin On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// mobiledataRouter.post("/network", async (req, res) => {
//   try {
//     const { selectedNetwork } = req.body;
//     console.log(req.body);

//     // Find the existing record or create one if it doesn't exist
//     let existingRecord = await MobileDataModle.findOne();
//     if (!existingRecord) {
//       existingRecord = new MobileDataModle();
//     }

//     // Update the selected ringtone
//     existingRecord.selectedNetwork= selectedNetwork;

//     await existingRecord.save();

//     res.json(existingRecord);
//   } catch (error) {
//     console.error("Error updating  selected Network :", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// mobiledataRouter.get("/network", async (req, res) => {
//   try {
//     // Find the existing record
//     const existingRecord = await MobileDataModle.findOne();

//     if (existingRecord) {
//       res.json({
//         selectedNetwork: existingRecord.selectedNetwork,
//       });
//     } else {
//       // Handle the case where  selected Network is selected
//       res.json({  selectedNetwork: null });
//     }
//   } catch (error) {
//     console.error("Error fetching  selected Network:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

mobiledataRouter.post("/networkv", async (req, res) => {
  try {
    const { selectedNetwork } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await MobileDataModle.findOne();
    if (!existingRecord) {
      existingRecord = new MobileDataModle();
    }

    // Update the selected network
    existingRecord.selectedNetwork = selectedNetwork;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating selected network:", error);
    res.status(500).send("Internal Server Error");
  }
});

mobiledataRouter.get("/networkv", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await MobileDataModle.findOne();

    if (existingRecord) {
      res.json({
        selectedNetwork: existingRecord.selectedNetwork,
      });
    } else {
      // Handle the case where no network is selected
      res.json({ selectedNetwork: null });
    }
  } catch (error) {
    console.error("Error fetching selected network:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = mobiledataRouter;

const express = require("express");
const shRouter = express.Router();
const SHModle = require("../models/Sound");


















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
    console.error("Error updating Vibrate on ring setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/vibratering", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isVibrateRingOn: existingRecord.isVibrateRingOn });
    } else {
      res.status(404).json({ error: "Vibrate on ring state not found" });
    }
  } catch (error) {
    console.error("Error fetching Vibrate on ring setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating Vibrate on Silent setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/vibratesilent", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isVibrateSilentOn: existingRecord.isVibrateSilentOn });
    } else {
      res.status(404).json({ error: "Vibrate on silent state not found" });
    }
  } catch (error) {
    console.error("Error fetching Vibrate on silent setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating change with button setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/changebutton", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isChangeWithButtonOn: existingRecord.isChangeWithButtonOn });
    } else {
      res.status(404).json({ error: "change with button state not found" });
    }
  } catch (error) {
    console.error("Error fetching change with button setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating Keyboard Clicks setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/keyboard", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isKeyboardClicksOn: existingRecord.isKeyboardClicksOn });
    } else {
      res.status(404).json({ error: "Keyboard Clicks state not found" });
    }
  } catch (error) {
    console.error("Error fetching Keyboard Clicks setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating Keyboard Clicks setting:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/locksound", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isLockSoundOn: existingRecord.isLockSoundOn });
    } else {
      res.status(404).json({ error: "Lock Sound On state not found" });
    }
  } catch (error) {
    console.error("Error fetching Lock Sound On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error("Error updating System Haptics On:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/system", async (req, res) => {
  try {
    const existingRecord = await SHModle.findOne();
    if (existingRecord) {
      res.json({ isSystemHapticsOn: existingRecord.isSystemHapticsOn });
    } else {
      res.status(404).json({ error: "System Haptics On state not found" });
    }
  } catch (error) {
    console.error("Error fetching System Haptics On setting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});








shRouter.post("/sound", async (req, res) => {
  const { sliderValue } = req.body;

  try {
    // Find or create a document (only one document in the collection)
    const soundHapticsSettings = await SHModle.findOne({});
    if (!soundHapticsSettings) {
      // Create a new document if it doesn't exist
      await SHModle.create({ soundLevel: sliderValue });
    } else {
      // Update the existing document
      soundHapticsSettings.soundLevel = sliderValue;
      await soundHapticsSettings.save();
    }

    res.json({
      message: "Sound level data received and saved",
      SoundLevel: sliderValue,
    });
  } catch (error) {
    console.error("Error saving sound level data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

shRouter.get("/sound", async (req, res) => {
  try {
    // Retrieve the sound level data
    const soundHapticsSettings = await SHModle.findOne({});
    const soundLevel = soundHapticsSettings
      ? soundHapticsSettings.soundLevel
      : 50;

    res.json({ SoundLevel: soundLevel });
  } catch (error) {
    console.error("Error fetching sound level data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});









shRouter.post("/ringtone", async (req, res) => {
  try {
    const { selectedRingtone } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedRingtone = selectedRingtone;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating selected ringtone:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/ringtone", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({ selectedRingtone: existingRecord.selectedRingtone });
    } else {
      // Handle the case where no ringtone is selected
      res.json({ selectedRingtone: null });
    }
  } catch (error) {
    console.error("Error fetching selected ringtone:", error);
    res.status(500).send("Internal Server Error");
  }
});









shRouter.post("/texttone", async (req, res) => {
  try {
    const { selectedTexttone } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedTexttone = selectedTexttone;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating  selected Texttone:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/texttone", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({ selectedTexttone: existingRecord.selectedTexttone });
    } else {
      // Handle the case where no ringtone is selected
      res.json({ selectedTexttone: null });
    }
  } catch (error) {
    console.error("Error fetching  selected Texttone:", error);
    res.status(500).send("Internal Server Error");
  }
});









shRouter.post("/voicemail", async (req, res) => {
  try {
    const { selectedNewVoicemail } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedNewVoicemail = selectedNewVoicemail;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating  selected Texttone:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/voicemail", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({ selectedNewVoicemail: existingRecord.selectedNewVoicemail });
    } else {
      // Handle the case where no New Voice mail is selected
      res.json({ selectedNewVoicemail: null });
    }
  } catch (error) {
    console.error("Error fetching  selected New Voice mail:", error);
    res.status(500).send("Internal Server Error");
  }
});








shRouter.post("/calendar", async (req, res) => {
  try {
    const { selectedCalendarAlerts } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedCalendarAlerts= selectedCalendarAlerts;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating  selected Calendar Aletrs:", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/calendar", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({
        selectedCalendarAlerts: existingRecord.selectedCalendarAlerts,
      });
    } else {
      // Handle the case where selected Calendar Aletrs is selected
      res.json({ selectedCalendarAlerts: null });
    }
  } catch (error) {
    console.error("Error fetching selected Calendar Aletrs:", error);
    res.status(500).send("Internal Server Error");
  }
});














shRouter.post("/reminder", async (req, res) => {
  try {
    const { selectedReminderAlerts } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedReminderAlerts= selectedReminderAlerts;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating selected Reminder Alerts :", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/reminder", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({
        selectedReminderAlerts: existingRecord.selectedReminderAlerts,
      });
    } else {
      // Handle the case where selected Reminder Alerts is selected
      res.json({ selectedReminderAlerts: null });
    }
  } catch (error) {
    console.error("Error fetching selected Reminder Alerts:", error);
    res.status(500).send("Internal Server Error");
  }
});











shRouter.post("/airdrop", async (req, res) => {
  try {
    const { selectedAirdropAlerts } = req.body;
    console.log(req.body);

    // Find the existing record or create one if it doesn't exist
    let existingRecord = await SHModle.findOne();
    if (!existingRecord) {
      existingRecord = new SHModle();
    }

    // Update the selected ringtone
    existingRecord.selectedAirdropAlerts=selectedAirdropAlerts;

    await existingRecord.save();

    res.json(existingRecord);
  } catch (error) {
    console.error("Error updating selected Airdrop Alert :", error);
    res.status(500).send("Internal Server Error");
  }
});

shRouter.get("/airdrop", async (req, res) => {
  try {
    // Find the existing record
    const existingRecord = await SHModle.findOne();

    if (existingRecord) {
      res.json({
        selectedAirdropAlerts: existingRecord.selectedAirdropAlerts,
      });
    } else {
      // Handle the case where selected Reminder Alerts is selected
      res.json({ selectedAirdropAlerts: null });
    }
  } catch (error) {
    console.error("Error fetching selected Airdrop Alert:", error);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = shRouter;

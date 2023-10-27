const mongoose = require("mongoose");

const SandHSchema = new mongoose.Schema({
  isVibrateRingOn: { type: Boolean, default: false },
  isVibrateSilentOn: { type: Boolean, default: false },
  isChangeWithButtonOn: { type: Boolean, default: false },
  isKeyboardClicksOn:{type:Boolean , default:false},
  isLockSoundOn:{type:Boolean , default:false},
  isSystemHapticsOn:{type:Boolean , default:false},
  soundLevel: { type: Number, default: 10 },
  selectedRingtone: {type:String},
  selectedTexttone:{type:String},
  selectedNewVoicemail:{type:String},
  selectedCalendarAlerts:{type:String},
  selectedReminderAlerts:{type:String},
  selectedAirdropAlerts:{type:String},
});

const SHModle = mongoose.model("SandH", SandHSchema, "Sound & Haptics");
module.exports = SHModle;

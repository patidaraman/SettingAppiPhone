const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passwordRouter = require("./Routes/WifiPasswordRoutes");
const hotspotRouter = require("./Routes/HotspotRoutes");
const airplanemodeRouter = require("./Routes/AirplaneModeRoute");
const wifiRouter = require("./Routes/WifiRoutes");
const bluetoothRouter = require("./Routes/BluetoothRoutes");
const mobiledataRouter = require("./Routes/MobileDataRoutes");
const brightnessRouter = require("./Routes/BrightnessRoutes");
const server = express();

const port = 8000;

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());





server.use("/password", passwordRouter);
server.use("/hotspot", hotspotRouter);
server.use("/airplanemode", airplanemodeRouter);
server.use("/wifi", wifiRouter);
server.use("/bluetooth", bluetoothRouter);
server.use("/mobiledata", mobiledataRouter);
server.use("/brightness", brightnessRouter)

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/SettingsiPhone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(port, () => {
      console.log("Server Started on port no 8000");
    });
  })

  .catch((error) => {
    console.log(error);
  });

// Define your MongoDB schema and models using Mongoose.
// server.use("/password", passwordRouter);

// const PasswordSchema = new mongoose.Schema({
//   password: Number,
//   active: Boolean,
// });
// const user = mongoose.model("Password ", PasswordSchema);
// server.post("/Password", async (req, res) => {
//   console.log(" wifi  password  coming");

//   const data = new user({
//     password: req.body.password,
//   });
//   const val = await data.save();
//   res.json(val);
// });

// const HostpotSchema = new mongoose.Schema({
//   isHotspotOn: Boolean,
// });
// const HotspotModle = mongoose.model("Hotspot", HostpotSchema);

// server.post("/hotspot", async (req, res) => {
//   try {
//     const Hdata = new HotspotModle({
//       isHotspotOn: req.body.isHotspotOn,
//     });
//     console.log("Hotspot triggered");
//     const Hcond = await Hdata.save();
//     res.json(Hcond);
//   } catch (error) {
//     console.error("Error storing data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// const playlistSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     requierd: true,
//   },
//   Lang: String,
//   Videos: Number,
//   author: String,
//   active: Boolean,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Playlist = new mongoose.model("Playlist ", playlistSchema);
// const createDocument = async () => {
//   try {
//     const reactPlaylist = new Playlist({
//       name: " Vaibhav patidar",
//       Lang: "front end ",
//       Videos: 100,
//       author: "patidar",
//       active: "true",
//     });
//     const result = await reactPlaylist.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

// const HotspotToggleSchema = new mongoose.Schema({
//   isHotspotToggleOn: Boolean,
//   active: Boolean,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const HotspotToggle = new mongoose.model("HotspotToggle", HotspotToggleSchema);
// const createDo = async () => {
//   try {
//     const reactHotspotToggle = new HotspotToggle({
//       isHotspotToggleOn: "false",
//       active: "true",
//     });
//     const result = await reactHotspotToggle.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDo();

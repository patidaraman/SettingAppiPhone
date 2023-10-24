const express = require("express");
const passwordRouter = express.Router();
const user = require('../models/WifiPassword')

passwordRouter.post("/Password", async (req, res) => {
  console.log("Wifi Pasword Entered");

  const data = new user({
    password: req.body.password,
  });
  const val = await data.save();
  res.json(val);
});

passwordRouter.get("/Password", async (req, res) => {
    try {
      const data = await user.findOne(); // You can customize this query to fetch the correct password
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching password" });
    }
  });

module.exports = passwordRouter;

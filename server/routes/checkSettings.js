const express = require("express");
const router = express.Router();
const settingsData = require("../../settings.json");

router.get("/", (req, res) => {
  const checkSettings = async () => {
    res.json({
      username: settingsData["username"],
      password: settingsData["password"],
    });
  };
  checkSettings();
});

module.exports = router;

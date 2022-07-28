const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");

router.get("/", (req, res) => {
  const getConnection = async () => {
    connection.ping((err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("MySQL Server is Down");
      } else {
        res.json({
          connected: "true",
          id: connection.threadId,
        });
      }
    });
  };
  getConnection();
  console.log("Called");
});

module.exports = router;

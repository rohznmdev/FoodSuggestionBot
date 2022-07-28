const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");

router.get("/", (req, res) => {
  const useDB = async () => {
    let sql = "USE FoodSuggestionBotDB;";
    connection.query(sql, (err, result) => {
      if (err) throw err;
    });
    let checkSQL = "SELECT DATABASE();";
    connection.query(checkSQL, (err, result) => {
      if (err) throw err;
      res.json({
        Current_Database: result[0]["DATABASE()"],
      });
    });
    console.log("usedatabase called");
  };
  useDB();
});

module.exports = router;

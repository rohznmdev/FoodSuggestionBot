const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");
const axios = require("axios");

router.get("/", (req, res1) => {
  const createDatabase = async () => {
    axios.get("http://localhost:8080/checkdatabase").then((res) => {
      if (res.data.Database_Exists === "False") {
        let sql = "CREATE DATABASE FoodSuggestionBotDB";
        connection.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            return res1.status(500).send("MySQL Server is Down");
          } else {
            res1.json({
              Database_Created: "True",
            });
          }
        });
      } else {
        res1.json({
          Database_Created: "False",
        });
      }
    });
    console.log("createdatabase called");
  };
  createDatabase();
});

module.exports = router;

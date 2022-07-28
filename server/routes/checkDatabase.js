const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");

router.get("/", (req, res) => {
  const checkMainDB = async () => {
    let sql = "SHOW DATABASES;";
    // defaults to the db existing as false
    let dbExists = false;
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("MySQL Server is Down");
      } else {
        for (let i = 0; i < result.length; i++) {
          // if the db exists set it to true to illicit a true response.
          if (result[i].Database === "FoodSuggestionBotDB") {
            dbExists = true;
          }
        }
        if (dbExists === true) {
          res.json({
            Database_Exists: "True",
          });
        } else if (dbExists !== true) {
          res.json({
            Database_Exists: "False",
          });
        }
      }
      console.log("checkdatabase called");
    });
  };
  checkMainDB();
});

module.exports = router;

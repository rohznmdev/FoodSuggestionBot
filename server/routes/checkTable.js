const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");

router.get("/", (req, res) => {
  const checkTables = async () => {
    let sql = "SHOW TABLES;";
    let tableExists = false;
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("MySQL Server is Down");
      } else {
        if (result.length == 0) {
          res.json({
            Table_Exists: "False",
          });
        } else {
          for (let i = 0; i < result.length; i++) {
            if (result[i].Tables_in_foodsuggestionbotdb === "recipes") {
              tableExists = true;
            }
          }
          if (tableExists === true) {
            res.json({
              Table_Exists: "True",
            });
          }
        }
      }
    });
    console.log("checktable called");
  };
  checkTables();
});

module.exports = router;

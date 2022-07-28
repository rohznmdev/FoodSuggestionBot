const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");
const axios = require("axios");

router.get("/", (req, res1) => {
  const createTable = async () => {
    axios.get("http://localhost:8080/checktable").then((res) => {
      if (res.data.Table_Exists === "False") {
        let sql =
          "CREATE TABLE recipes (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100),last_name VARCHAR(100));";
        connection.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            return res1.status(500).send("MySQL Server is Down");
          } else {
            res1.json({
              Table_Created: "True",
            });
          }
        });
      } else {
        res1.json({
          Table_Created: "False",
        });
      }
    });
    console.log("createtable called");
  };
  createTable();
});

module.exports = router;

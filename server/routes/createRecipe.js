const express = require("express");
const router = express.Router();
const { connection } = require("../connect.js");

router.post("/", (req, res) => {
  const createRecipe = async () => {
    let sql = `CREATE TABLE ${req.body.recipeName} (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100),last_name VARCHAR(100));`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`recipe ${req.body.recipeName} created!`);
      }
    });
  };
  createRecipe();
});

module.exports = router;

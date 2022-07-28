const mysql = require("mysql2");
const settingsData = require("../settings.json");

const connection = mysql.createConnection({
  host: "localhost",
  user: settingsData["username"],
  password: settingsData["password"],
});

const connect = async () => {
  connection.connect((err) => {
    if (err) {
      console.log(err);
      console.log("Failed to connect");
      return;
    }
    console.log("Connected! The thread id is: " + connection.threadId);
  });
  let sql = "USE FoodSuggestionBotDB;";
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
  return true;
};

module.exports = { connect, connection };

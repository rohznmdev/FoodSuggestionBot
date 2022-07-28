const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { connect } = require("./connect");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/checkconnection", require("./routes/checkConnection"));

app.use("/checkdatabase", require("./routes/checkDatabase"));

app.use("/createdatabase", require("./routes/createDatabase"));

app.use("/checksettings", require("./routes/checkSettings"));

app.use("/checktable", require("./routes/checkTable"));

app.use("/createtable", require("./routes/createTable"));

app.use("/usedatabase", require("./routes/useDatabase"));

app.use("/createrecipe", require("./routes/createRecipe"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));

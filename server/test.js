const axios = require("axios");

try {
  axios.post("http://localhost:8080/createrecipe", {
    recipeName: "burrito"
  }).then((response) => {
    console.log(response);
  });
} catch (err) {
  console.log(err);
}

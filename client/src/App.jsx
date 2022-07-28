import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header";
import Recipe from "./components/recipes/recipes";
import Main from "./components/main/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    try {
      axios.get("/checkdatabase").then((response) => {
        if (response.data.Database_Exists === "False") {
          axios.get("/createdatabase").then((response) => {
            if (response.data.Database_Created === "True") {
              axios.get("/usedatabase");
            }
          });
        } else if (response.data.Database_Exists === "True") {
          // database already exists move on to using it.
          axios.get("/usedatabase");
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/recipes" element={<Recipe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

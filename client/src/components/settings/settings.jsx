import React, { useEffect, useState } from "react";
import "./settings.css";
const axios = require("axios");

function Settings() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    try {
      axios.get("/checktable").then((response) => {
        setBackendData(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div>
      <div className="header">
        <h1>Settings</h1>
      </div>
      <div className="settings-container">
        <div className="sql-server">
          <h2 className="sql-info">MySQL Database Information</h2>
          <div className="sql-user">
            <div className="information">
              <div className="current-user">
                {backendData.Table_Exists === null ? (
                  <div>
                    <h4>Please update settings.</h4>
                  </div>
                ) : (
                  <div>
                    <h4>Current: {backendData.Table_Exists}</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

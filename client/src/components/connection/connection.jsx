import React, { useEffect, useState } from "react";
import "./connection.css";

function Connection() {
  const [backendData, setBackendData] = useState([{}]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 30);
      try {
        fetch("/checkconnection")
          .then((response) => response.json())
          .then((data) => {
            setBackendData(data);
          });
      } catch (err) {
        console.log(err);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {typeof backendData.connected === "undefined" ? (
        <small className="loading">Checking Status...</small>
      ) : (
        <small>Connected! ({backendData.id})</small>
      )}
    </div>
  );
}

export default Connection;

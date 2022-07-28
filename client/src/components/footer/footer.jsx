import "./footer.css";
import React from "react";
import Time from "../time/time";
import Connection from "../connection/connection";


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="version">
          <small>Version: 1.0.0</small>
        </div>
        <div className="time">
          <small>
            <Time />
          </small>
        </div>
        <div className="doc-container">
          <Connection />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

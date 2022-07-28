import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="link-container">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/recipes">Recipes</Link>
          </div>
          <div>
            <a
              href="https://github.com/rohznmdev/FoodSuggestionBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

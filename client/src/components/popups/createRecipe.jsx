import React from "react";
import "./createRecipe.css";

function CreateRecipe(props) {
  return props.trigger ? (
    <div className="create-recipe">
      <div className="vl"></div>
      <div className="inner">
        <div className="top-bar">
          <h1>Create Your Recipe!</h1>
          <img
            id="close"
            src="/images/menu-close.png"
            onClick={() => props.setTrigger(false)}
            alt="close-menu"
          />
        </div>
        <div className="main-recipe-container">
          <form className="questions">
            <div className="recipe-name">
              <label for="name">Name:</label>
              <input type="text"></input>
            </div>
            <div className="moods"></div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CreateRecipe;

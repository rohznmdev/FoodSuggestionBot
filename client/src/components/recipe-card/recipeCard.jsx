import React from "react";
import { Link } from "react-router-dom";
import "./recipeCard.css";

function RecipeCard(props) {
  return (
    <div className="card">
      <div className="name-container">
        <Link to={props.name}>{props.name}</Link>
      </div>
      <div className="content-container">
        <h5>Ingredients: {props.ingredients}</h5>
        <h5>Cooking Time: {props.time}</h5>
        <h5>Calories: {props.calories}</h5>
      </div>
    </div>
  );
}

export default RecipeCard;

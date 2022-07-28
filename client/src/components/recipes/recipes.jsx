import React from "react";
import "./recipes.css";
import RecipeCard from "../recipe-card/recipeCard";
import CreateRecipe from "../popups/createRecipe";
import { useState } from "react";

function Recipe(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="recipe-header">
        <div className="recipe">
          <h1>Recipes ({4})</h1>
        </div>
        <div className="options-container">
          <nav className="recipe-options">
            <div>
              <h4 className="create" onClick={() => setButtonPopup(true)}>
                Create Recipe
              </h4>
              <CreateRecipe trigger={buttonPopup} setTrigger={setButtonPopup} />
            </div>
            <div>
              <h4 className="delete">Delete Recipe</h4>
            </div>
          </nav>
        </div>
      </div>
      <div className="recipe-content">
        <RecipeCard name="Fries" ingredients="8" time="30" calories="500" />
        <RecipeCard name="Fries" ingredients="8" time="30" calories="500" />
        <RecipeCard name="Fries" ingredients="8" time="30" calories="500" />
        <RecipeCard name="Fries" ingredients="8" time="30" calories="500" />
      </div>
    </div>
  );
}

export default Recipe;

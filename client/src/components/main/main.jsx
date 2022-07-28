import "./main.css";
import React from "react";
function Main() {
  return (
    <div>
      <div className="intro-header">
        <div className="introduction">
          <h1>Hello!</h1>
        </div>
        <div className="recipe-container">
          <h1>Suggested Recipe</h1>
        </div>
      </div>
      <div className="main">
        <form className="questions">
          <div className="moods">
            <h2>How are you feeling?</h2>
            <div className="moods-container">
              <div className="mood1">
                <label for="mood1">Mood 1:</label>
                <input type="text"></input>
              </div>
              <div className="mood2">
                <label for="mood2">Mood 2:</label>
                <input type="text"></input>
              </div>
              <div className="mood3">
                <label for="mood3">Mood 3:</label>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="hunger">
            <h2>How hungry are you?</h2>
            <div className="hunger-container">
              <label for="levels">Choose a hunger level:</label>
              <select name="levels-options" id="options">
                <option></option>
                <option value="Very">Very</option>
                <option value="Medium">Medium</option>
                <option value="Not">Not Hungry</option>
              </select>
            </div>
          </div>
          <div className="calories">
            <h2>Calories</h2>
            <h4>How many calories should the meal have?</h4>
            <div>
              <label for="calories">Number of Calories: </label>
              <input type="number"></input>
            </div>
          </div>
          <div className="submit">
            <input
              type="submit"
              className="send-message"
              value="Find a recipe!"
            ></input>
          </div>
        </form>
        <div className="displayed-recipe">
          <h2 className="fetch-status">Fetching Recipe...</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;

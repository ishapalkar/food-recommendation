import React from "react";
import FoodItem from "./fooditem";

const FoodList = ({ foods, deleteFood }) => {
  return (
    <div>
      <h2>Recommended Foods 🍽️</h2>
      {foods.length === 0 ? <p>No food recommendations available.</p> : null}
      <div className="food-container">
        {foods.map((food, index) => (
          <FoodItem key={index} index={index} {...food} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;

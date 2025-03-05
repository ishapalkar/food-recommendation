import React from "react";

const FoodItem = ({ name, cuisine, rating, index, deleteFood }) => {
  if (!name || !cuisine || !rating) {
    return <p style={{ color: "red" }}>Invalid Food Data</p>;
  }

  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}/5</p>
      <button className="delete-btn" onClick={() => deleteFood(index)}>Remove</button>
    </div>
  );
};


export default FoodItem;

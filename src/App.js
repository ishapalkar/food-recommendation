import React, { useState, useEffect } from "react";
import FoodList from "./components/foodlist";
import "./styles.css";


const appStyle = {
  backgroundImage: `url("https://i.pinimg.com/736x/64/f2/8d/64f28dc8f4109b9c6c4831a4b3a3e57a.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};


function App() {
  // State to store food recommendations
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({ name: "", cuisine: "", rating: "" });
  const [filter, setFilter] = useState("");

  // Simulate fetching data with useEffect (Lifecycle)
  useEffect(() => {
    setTimeout(() => {
      setFoods([
        { name: "Sushi", cuisine: "Japanese", rating: 4.8 },
        { name: "Tacos", cuisine: "Mexican", rating: 4.5 },
        { name: "Pasta", cuisine: "Italian", rating: 4.7 },
        { name: "Paneer Tikka", cuisine: "Indian", rating: 4.9 }
      ]);
    }, 2000);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };

  // Add new food item
  const addFood = () => {
    if (!newFood.name || !newFood.cuisine || !newFood.rating) return;
    setFoods([...foods, newFood]);
    setNewFood({ name: "", cuisine: "", rating: "" }); // Reset form
  };


  // Delete food item
  const deleteFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };


  return (
    <div className="App" style={appStyle}>
      <h1>Food Recommendation App</h1>

      {/* Filter Dropdown */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Cuisines</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
      </select>

      {/* Add New Food */}
      <div className="add-food">
        <input type="text" name="name" value={newFood.name} placeholder="Food Name" onChange={handleChange} />
        <input type="text" name="cuisine" value={newFood.cuisine} placeholder="Cuisine" onChange={handleChange} />
        <input type="number" name="rating" value={newFood.rating} placeholder="Rating" onChange={handleChange} />
        <button onClick={addFood}>Add Food</button>
      </div>

      {/* Display Food List */}
      <FoodList foods={foods.filter(food => !filter || food.cuisine === filter)} deleteFood={deleteFood} />
    </div>
  );
}

export default App;

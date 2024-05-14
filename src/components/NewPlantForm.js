import React from "react";

function NewPlantForm({ newPlant, handleNewPlant, handleSubmit }) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleNewPlant}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleNewPlant}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleNewPlant}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList }) {
  return (
    <ul className="cards">{plantsList.map((plant) => {
      return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
    })}</ul>
  );
}

export default PlantList;

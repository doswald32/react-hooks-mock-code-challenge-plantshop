import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([]);
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  });

  function handleNewPlant(e) {
    if (e.target.name === "name") {
      setNewPlant({...newPlant, name: e.target.value});
    } else if (e.target.name === "image") {
      setNewPlant({...newPlant, image: e.target.value});
    } else if (e.target.name === "price") {
      setNewPlant({...newPlant, price: e.target.value});
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    let newList = [...plantsList, 
     {
      name: newPlant.name,
      image: newPlant.image,
      price: newPlant.price
    }];
    setPlantsList(newList);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:6001/plants")
    .then(r => r.json())
    .then(data => setPlantsList(data))
  }, [])

  return (
    <main>
      <NewPlantForm newPlant={newPlant} handleNewPlant={handleNewPlant}  handleSubmit={handleSubmit}/>
      <Search />
      <PlantList plantsList={plantsList}/>
    </main>
  );
}


export default PlantPage;

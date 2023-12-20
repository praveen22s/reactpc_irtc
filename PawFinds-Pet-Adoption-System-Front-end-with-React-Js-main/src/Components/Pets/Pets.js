import React, { useState } from "react";
import "./Pets.css";
import PetsViewer from "./PetsViewer";
import PetsData from "./PetList.json";

const Pets = () => {
  const [filter, setFilter] = useState("all");

  const filteredPets = PetsData.filter((petDetail) => {
    if (filter === "all") {
      return true;
    }
    return petDetail.type === filter;
  });

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fishs</option>
          <option value="Other">Other</option>
        </select>
      </div>
        <div className="pet-container">
          {filteredPets.map((petDetail, index) => (
            <PetsViewer pet={petDetail} key={index} />
          ))}
        </div>
    </>
  );
};

export default Pets;

import { useState } from "react";
import { Pets } from "../models/pets";
import "./../styles/ArraysEx.css";
import PetsTable from "./PetsTable";

function ArraysEx() {
  const [colors, setColors] = useState(["red", "orange", "yellow", "green"]);
  const [pets, setPets] = useState<Pets[]>([
    { name: "Spot", type: "dog", id: 1 },
    { name: "Moo", type: "cat", id: 2 },
    { name: "Bingo", type: "fish", id: 3 },
  ]);

  function addColor(color: string): void {
    const tempColors = colors.slice(0);
    tempColors.push(color);
    setColors(tempColors);
  }

  function removePetByIndex(index: number) {
    const tempPets = pets.slice(0);

    tempPets.splice(index, 1);

    setPets(tempPets);
  }

  return (
    <div className="ArraysEx">
      <div className="colors">
        <h1>Colors</h1>
        <ol>
          {colors.map((color) => (
            <li>{color}</li>
          ))}
        </ol>
        <button onClick={() => addColor("blue")}>Add Blue</button>
        <button onClick={() => addColor("violet")}>Add Violet</button>
        <button onClick={() => addColor("purple")}>Add Purple</button>
      </div>
      <div className="Pets">
        <h1>Pet List</h1>
        {pets.map((pet, index) => (
          <PetsTable
            pets={pet}
            remove={() => removePetByIndex(index)}
          ></PetsTable>
        ))}
      </div>
    </div>
  );
}

export default ArraysEx;

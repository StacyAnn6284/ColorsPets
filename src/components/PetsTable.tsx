import { Pets } from "../models/pets";

interface PetsTableProps {
  pets: Pets;
  remove(): void;
}

function PetsTable({ pets, remove }: PetsTableProps) {
  return (
    <div>
      <table>
        <th>Name:</th>
        <td>{pets.name}</td>
        <th>Type:</th>
        <td>{pets.type}</td>
        <button onClick={remove}>Remove</button>
      </table>
    </div>
  );
}

export default PetsTable;

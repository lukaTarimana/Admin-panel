import { FC, useState } from "react";

type Company = {
  name: string;
  products?: {
    name: string;
    price: number;
    description: string;
  }[];
};

type Companies = Company[];

interface ListElementProps {
  data: Companies;
}

const ListElement: FC<ListElementProps> = ({ data }) => {
  const [companies, setCompanies] = useState<Companies>(data);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();

    if (draggedIndex !== null) {
      const updatedCompanies = [...companies];
      const [draggedCompany] = updatedCompanies.splice(draggedIndex, 1);
      updatedCompanies.splice(index, 0, draggedCompany);

      setCompanies(updatedCompanies);
      setDraggedIndex(null);
    }
  };

  return (
    <ul className="w-full">
      {companies.map((company, i) => (
        <li
          draggable="true"
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, i)}
          key={i}
          className="border-2 w-full h-14"
        >
          <h3>{company.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ListElement;

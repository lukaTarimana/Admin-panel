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
  updateData?: (newData: Companies) => void;
}

const ListElement: FC<ListElementProps> = ({ data, updateData }) => {
  const [companies, setCompanies] = useState<Companies>(data);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

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
      if (updateData) {
        updateData(updatedCompanies);
      }
    }
  };

  const toggleCompanyExpansion = (index: number) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <ul className="w-full p-4">
      {companies.map((company, i) => (
        <li
          key={i}
          className={`border-2 mt-4 w-full min-h-[100px]`}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, i)}
        >
          <div
            className="cursor-pointer w-full h-[100px] flex justify-center items-center"
            onClick={() => toggleCompanyExpansion(i)}
          >
            <h3>{company.name}</h3>
          </div>
          {expandedIndices.includes(i) && company.products && (
            <ListElement data={company.products} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListElement;

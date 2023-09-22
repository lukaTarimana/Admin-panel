import { FC, useState } from "react";

import ListElement from "./ListElement";

// import companiesData from "../data/companies.json";
type Company = {
  name: string;
  products?: {
    name: string;
    price: number;
    description: string;
  }[];
};

type Companies = Company[];

const Companies: FC = () => {
  // localStorage.setItem("companies", JSON.stringify(companiesData));
  const [companies, setCompanies] = useState<Companies>(
    JSON.parse(localStorage.getItem("companies") || "[]")
  );
  const updateCompanies = (newCompanies: Companies) => {
    setCompanies(newCompanies);
    localStorage.setItem("companies", JSON.stringify(newCompanies));
  };
  return (
    <div className="text-slate-950 w-full bg-white h-full overflow-y-auto">
      <h1 className="font-sans underline">COMPANIES</h1>
      <div className="w-full flex flex-col justify-start items-start">
        <ListElement data={companies} updateData={updateCompanies} />
      </div>
    </div>
  );
};

export default Companies;

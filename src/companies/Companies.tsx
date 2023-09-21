import { FC } from "react";

import ListElement from "./ListElement";

import companies from "../data/companies.json";

const Companies: FC = () => {
  console.log(companies, "companies");

  return (
    <div className="text-slate-950 w-full bg-red-700">
      <h1>Companies</h1>
      <div className="w-full border-2 flex flex-col justify-start items-start bg-slate-600">
        <ListElement data={companies} />
      </div>
    </div>
  );
};

export default Companies;

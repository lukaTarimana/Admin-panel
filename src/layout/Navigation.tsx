import { FC } from "react";
import Admin from "../assets/admin-image.png";
import { Link } from "react-router-dom";

const navigationList: { name: string; link: string }[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Companies", link: "/companies" },
  { name: "Contact", link: "/contact" },
];

const Navigation: FC = () => {
  return (
    <nav className="flex flex-col h-screen items-start bg-gradient-to-b from-sky-700 to-secondary-200 via-violet-950  w-1/5 pl-6">
      <div className="w-24 h-24 flex justify-center items-center my-2">
        <img src={Admin} alt="Admin image" />
      </div>
      <ul className=" flex flex-col items-start">
        {navigationList.map((item, index) => {
          return (
            <li key={index} className=" my-2">
              <Link
                className="text-slate-200 hover:text-slate-50 hover:underline"
                to={item.link}
              >
                {" "}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

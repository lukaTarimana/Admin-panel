import { FC } from "react";
import Admin from "../assets/admin-image.png";
import { Link } from "react-router-dom";

const navigationList: { name: string; link: string; isDisabled?: boolean }[] = [
  { name: "Home", link: "/" },
  { name: "Companies", link: "/companies" },
  { name: "About", link: "/about", isDisabled: true },
  { name: "Contact", link: "/contact", isDisabled: true },
];

const Navigation: FC = () => {
  return (
    <nav className="flex flex-col h-screen items-start bg-white w-1/5 pl-6">
      <div className="w-24 h-24 flex justify-center items-center my-2">
        <img src={Admin} alt="Admin image" />
      </div>
      <ul className=" flex flex-col items-start">
        {navigationList.map((item, index) => {
          return (
            <li key={index} className="my-2">
              <Link
                className={`${
                  item?.isDisabled
                    ? "text-slate-500 cursor-not-allowed"
                    : "text-black"
                } hover:text-slate-800 hover:underline`}
                to={item?.isDisabled ? "" : item.link}
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

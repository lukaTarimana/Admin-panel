import { FC, ReactNode } from "react";
import Header from "./header/Header.tsx";
import Navigation from "./Navigation.tsx";

type LayoutProps = {
  children: ReactNode;
  isHome?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <div className="flex flex-row  min-h-screen max-h-screen w-full bg-gray-100">
      <Navigation />
      <div className=" w-full overflow-y-auto">
        <main
          className={`${
            isHome ? "grid grid-cols-4 gap-8" : " "
          } pt-32 relative  place-content-center place-items-center  w-full flex-1 px-2 text-center`}
        >
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

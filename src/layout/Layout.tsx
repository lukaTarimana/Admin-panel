import { FC, ReactNode } from "react";
import Header from "./header/Header.tsx";
import Navigation from "./Navigation.tsx";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row  min-h-screen max-h-screen w-full bg-gray-100">
      <Navigation />
      <div className=" w-full overflow-y-auto">
        <main className="grid pt-32 relative grid-cols-4 place-content-center place-items-center gap-8 w-full flex-1 px-2 text-center">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

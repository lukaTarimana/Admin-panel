import { FC } from "react";
import UserForm from "../components/userForm/UserForm";

const Login: FC = () => {
  return (
    <div className="flex flex-row w-full h-full bg-white text-black">
      <div className="w-1/2 h-full bg-slate-500"></div>
      <UserForm />
    </div>
  );
};

export default Login;

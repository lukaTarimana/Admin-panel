import { FC } from "react";

import Input from "../../global/input/Input";
import Button from "../../global/button/Button";

const UserForm: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).emailAddress.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (email === "admin" && password === "admin") {
      localStorage.setItem("key", "admin");
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className=" w-1/2flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account"
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="text"
            label="Email address"
            id="emailAddress"
            placeholder="example@gmail.com"
          />
          <Input
            type="password"
            label="Password"
            id="password"
            placeholder="********"
          />

          <div>
            <Button
              text="Sign in"
              className={
                "flex w-full justify-center rounded-m px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

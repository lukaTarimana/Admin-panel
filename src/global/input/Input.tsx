import { FC } from "react";

interface InputProps {
  type: string;
  label: string;
  id: string;
  placeholder: string;
  value?: string;
}

const Input: FC<InputProps> = ({ type, label, id, placeholder, value }) => {
  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor={id}
        className="block text-sm pl-2 font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex justify-center w-full">
        <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type={type}
            name={id}
            id={id}
            defaultValue={value ? value : ""}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

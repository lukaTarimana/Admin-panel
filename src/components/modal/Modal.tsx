import { FC, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Input from "../../global/input/Input";
import Button from "../../global/button/Button";

interface User {
  name: string;
  income: string;
}

interface ModalProps {
  isOpen: boolean;
  isAdd: boolean;
  username: string;
  userIncome: string;
  onClose: () => void;
  setUsers?: (users: User[]) => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  isAdd,
  setUsers,
  username,
  userIncome,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const saveUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUsername = formData.get("username") as string;
    const newIncome = formData.get("income") as string;

    if (isAdd) {
      const existingUsersJSON = localStorage.getItem("users");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      existingUsers.push({ username: newUsername, income: newIncome });
      if (setUsers) {
        setUsers(existingUsers);
      }
      localStorage.setItem("users", JSON.stringify(existingUsers));
      onClose();
    } else {
      const updatedUser: User = { name: newUsername, income: newIncome };

      const existingUsersJSON = localStorage.getItem("users");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      const updatedUsers = existingUsers.map((user: User) =>
        user.name === username && user.income === userIncome
          ? updatedUser
          : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      if (setUsers) {
        setUsers(updatedUsers);
      }

      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="bg-white py-4 px-8 w-2/6 h-3/5 rounded-lg z-50"
        ref={modalRef}
      >
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => saveUser(e)}
          className="h-full"
        >
          <div className="flex flex-col h-full items-center border-b border-gray-900/10 pb-12">
            <div className="mt-10 flex flex-col justify-center gap-y-14 h-full w-full">
              <Input
                type="text"
                label="Username"
                id="username"
                placeholder="John Doe"
                value={isAdd ? "" : username}
              />
              <Input
                type="number"
                label="Income"
                id="income"
                placeholder="10000$"
                value={isAdd ? "" : userIncome}
              />

              <div className="col-span-full flex flex-col items-center">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <Button
                  text="Save"
                  type="submit"
                  className="text-white w-20 hover:text-gray-800"
                />
                <Button
                  text="Close"
                  type="button"
                  onClick={onClose}
                  className="w-20 hover:text-gray-800"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;

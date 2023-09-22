import { useState, FC, useMemo } from "react";
import Modal from "../modal/Modal";

interface User {
  name: string;
  income: string;
}

interface BoxProps {
  user: User | null;
  id: number | null;
  onDelete?: (id: number) => void;
  setUsers?: (users: User[]) => void;
}

const Box: FC<BoxProps> = ({ user, id, onDelete, setUsers }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isAdd = useMemo(() => !user, [user]);

  const onClose = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const handleDelete = () => {
    if (onDelete && id !== null) {
      onDelete(id);
    }
  };

  const income: string = user ? user.income : "0";
  const name: string = user ? user.name : "";

  return (
    <>
      <div
        className={`w-64 h-80 ${
          isAdd
            ? "bg-gray-300 justify-between"
            : "justify-end bg-gradient-to-br   from-slate-400 to-darkBlue "
        }
         bg-cover bg-center bg-no-repeat
        rounded-xl shadow-md flex flex-col items-center p-4
        `}
      >
        {isAdd ? (
          <h1>Add Box</h1>
        ) : (
          <div className="flex flex-col text-lg items-start mb-5">
            <h3 className="text-green-500 italic">Income: ${income}</h3>
            <span className="flex text-violet-200">
              <h3 className="mr-1">Name:</h3>
              <h3 className="text-ellipsis overflow-hidden max-w-[150px]">
                {name}
              </h3>
            </span>
          </div>
        )}
        <div className="flex gap-4 justify-center w-full">
          <button
            className={isAdd ? "bg-green-600" : "bg-blue-500"}
            onClick={toggleModal}
          >
            {isAdd ? "Add Box" : "Edit Box"}{" "}
          </button>
          {!isAdd && (
            <button className="bg-red-700" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isAdd={isAdd}
        setUsers={setUsers}
        username={name}
        userIncome={income}
      />
    </>
  );
};

export default Box;

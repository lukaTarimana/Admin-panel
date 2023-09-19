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
            ? "bg-gray-300"
            : "bg-gradient-to-br from-slate-400 to-darkBlue "
        }
        rounded-xl shadow-md flex flex-col justify-between items-center p-4
        `}
      >
        {isAdd ? (
          <h1>Add Box</h1>
        ) : (
          <>
            <h3>Income ${income}</h3>
            <h3>Name {name}</h3>
          </>
        )}
        <button className="bg-blue-500" onClick={toggleModal}>
          {isAdd ? "Add Box" : "Edit Box"}{" "}
        </button>
        {!isAdd && <button onClick={handleDelete}>Delete</button>}
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

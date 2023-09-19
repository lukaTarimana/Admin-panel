import { FC, useEffect, useState } from "react";
import Box from "../components/box/Box";

interface User {
  name: string;
  income: string;
}

const Home: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsersJSON = localStorage.getItem("users");
    const parsedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];
    setUsers(parsedUsers);
  }, []);

  const handleDelete = (id: number) => {
    const updatedUsers = [...users];
    updatedUsers.splice(id, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      {users.map((user: User, id: number) => (
        <Box
          user={user}
          key={id}
          id={id}
          onDelete={handleDelete}
          setUsers={setUsers}
        />
      ))}
      <Box user={null} id={null} setUsers={setUsers} />
    </>
  );
};

export default Home;

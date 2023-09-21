import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div>
      <h1>404 not found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;

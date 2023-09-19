import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./login/Login";

const App: FC = () => {
  // const [count, setCount] = useState(0);
  const userKey: string | null = localStorage.getItem("key");

  return (
    <Router>
      <Routes>
        {userKey ? (
          <>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <h1 className="text-red-500">About</h1>
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <h1 className="text-red-500">Contact</h1>
                </Layout>
              }
            />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;

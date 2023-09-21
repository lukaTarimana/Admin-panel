import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./login/Login";
import NotFound from "./not-found/NotFound";
import Companies from "./companies/Companies";

const App: FC = () => {
  const userKey: string | null = localStorage.getItem("key");

  return (
    <Router>
      <Routes>
        {userKey ? (
          <>
            <Route
              path="/"
              element={
                <Layout isHome={true}>
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
            <Route
              path="/companies"
              element={
                <Layout>
                  <Companies />
                </Layout>
              }
            />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

export default App;

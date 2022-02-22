import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./components/auth/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

function App() {
  const { state, dispatch } = useAuth();

  return (
    <div className="App">
      <div className="topnav">
        {state?.profile?.name ? (
          <div className="profile-name">{state?.profile?.name}</div>
        ) : (
          <Link to={"/login"}>{"Login"}</Link>
        )}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

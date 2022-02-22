import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./components/auth/AuthContext";
import LoginButton from "./components/auth/LoginButton";
import LogoutButton from "./components/auth/LogoutButton";
import RequireAuth from "./components/auth/RequireAuth";
import Home from "./pages/Home";

function App() {
  const { state } = useAuth();

  return (
    <div className="App">
      <div className="topnav">
        {state?.profile?.name ? (
          <>
            <div className="profile-name">{state?.profile?.name}</div>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
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

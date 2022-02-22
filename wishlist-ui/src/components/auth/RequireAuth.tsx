import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./AuthContext";

const RequireAuth = ({ children }: any) => {
  const { state, dispatch } = useAuth();

  return state?.token ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;

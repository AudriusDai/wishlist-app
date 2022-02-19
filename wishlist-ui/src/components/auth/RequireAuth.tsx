import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../store/storeAuth";

const RequireAuth = ({ children }: any) => {
  const isAuthenticated = getToken();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
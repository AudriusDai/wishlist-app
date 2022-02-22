import React from "react";

import { useAuth } from "./AuthContext";

const RequireAuth = ({ children }: any) => {
  const { state } = useAuth();

  return state?.token ? children : <div> Please login!</div>;
};

export default RequireAuth;

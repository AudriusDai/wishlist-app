import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId } from "../../config";
import { useAuth } from "./AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  const onSuccess = () => {
    dispatch({ type: "CLEAR" });
    navigate("/login");
  };

  const onFailure = () => {
    alert("failed to logout!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={googleClientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      ></GoogleLogout>
    </div>
  );
};

export default LogoutButton;

import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId } from "../config";

const LogoutButton = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    localStorage.setItem("authToken", "");
    localStorage.setItem("name", "");
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

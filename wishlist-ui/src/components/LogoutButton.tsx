import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId } from "../config";
import { clearStore } from "../store/store";

const LogoutButton = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    clearStore();
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

import React, { useCallback } from "react";
import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId } from "../../config";
import { useAuth } from "./AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const onSuccess = useCallback(() => {
    dispatch({ type: "CLEAR" });
    navigate("/");
  }, [dispatch, navigate]);

  const onFailure = () => {
    alert("failed to logout!");
  };

  const { signOut } = useGoogleLogout({
    clientId: googleClientId,
    onLogoutSuccess: onSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="active">
      {"Logout"}
    </button>
  );
};

export default LogoutButton;

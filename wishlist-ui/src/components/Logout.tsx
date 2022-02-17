import React from "react";
import { GoogleLogout } from "react-google-login";
import { googleClientId } from "../config";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={googleClientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;

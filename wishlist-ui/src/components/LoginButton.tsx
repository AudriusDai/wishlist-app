import React, { useCallback } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import { googleClientId } from "../config";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      const response = res as GoogleLoginResponse;
      refreshTokenSetup(response);
      localStorage.setItem("authToken", response.tokenId);
      localStorage.setItem("name", response.profileObj.givenName);
      navigate("/");
    },
    [navigate]
  );

  const onFailure = (res: any) => {
    console.log("Login failed: res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginButton;

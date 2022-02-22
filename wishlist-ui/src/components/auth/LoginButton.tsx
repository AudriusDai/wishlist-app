import React, { useCallback } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { googleClientId } from "../../config";
import { useNavigate } from "react-router-dom";
import { Profile, useAuth } from "./AuthContext";

const LoginButton = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();

  const onSuccess = useCallback(
    (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      const response = res as GoogleLoginResponse;
      dispatch({
        type: "UPDATE_PROFILE",
        profile: response.profileObj as Profile,
      });
      dispatch({
        type: "UPDATE_TOKEN",
        token: response.tokenId,
      });
      navigate("/");
    },
    [navigate]
  );

  const onFailure = (res: any) => {
    console.log("Login failed: res:", res);
  };

  return (
    <GoogleLogin
      clientId={googleClientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default LoginButton;

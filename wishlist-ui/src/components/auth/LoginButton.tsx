import React, { useCallback } from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId } from "../../config";
import { Profile, useAuth } from "./AuthContext";

function LoginButton() {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
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
    [dispatch, navigate]
  );

  const onFailure = (res: any) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: googleClientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="active">
      {"Login via Google"}
    </button>
  );
}

export default LoginButton;

import { googleClientId } from "../config";
import React from "react";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

function Login() {
  const onSuccess = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    const response = res as GoogleLoginResponse;
    console.log("Login Success: currentUser:", response.profileObj);
    refreshTokenSetup(res);
  };

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
}

export default Login;

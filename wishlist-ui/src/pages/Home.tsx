import React from "react";
import LogoutButton from "../components/LogoutButton";
import { getToken, getProfile } from "../store/store";

const Home = () => {
  const token = getToken();
  const profile = getProfile();
  return (
    <div>
      {`Welcome to wishlist app ${profile.name}!`}
      <br />
      {token}
      <br />
      <LogoutButton />
    </div>
  );
};

export default Home;

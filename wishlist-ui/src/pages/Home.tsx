import React from "react";
import LogoutButton from "../components/auth/LogoutButton";
import { getProfile } from "../store/storeAuth";

const Home = () => {
  const profile = getProfile();
  return (
    <div>
      {`Welcome to wishlist app ${profile.name}!`}
      <br />
      <br />
      <LogoutButton />
    </div>
  );
};

export default Home;

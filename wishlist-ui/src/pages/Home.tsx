import React from "react";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const token = localStorage.getItem("authToken");
  const name = localStorage.getItem("name");
  return (
    <div>
      {`Welcome to wishlist app ${name}!`}
      <br />
      {token}
      <br />
      <LogoutButton />
    </div>
  );
};

export default Home;

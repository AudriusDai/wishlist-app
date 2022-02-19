import React from "react";
import LogoutButton from "../components/auth/LogoutButton";
import Wishlist from "../components/wishlist/Wishlist";
import { getProfile } from "../store/storeAuth";
import { getWishlist } from "../store/storeWishlist";

const Home = () => {
  const profile = getProfile();
  const wishlist = getWishlist();
  return (
    <div>
      {`Welcome to wishlist app ${profile.name}!`}
      <br />
      <Wishlist data={wishlist} />
      <br />
      <LogoutButton />
    </div>
  );
};

export default Home;

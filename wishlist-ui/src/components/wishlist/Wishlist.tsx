import React from "react";
import { Wish as WishModel } from "../../store/storeWishlist";
import Wish from "./Wish";

const Wishlist = ({ data }: { data: WishModel[] }) => {
  return (
    <>
      {data.map((item) => (
        <Wish data={item} />
      ))}
    </>
  );
};

export default Wishlist;

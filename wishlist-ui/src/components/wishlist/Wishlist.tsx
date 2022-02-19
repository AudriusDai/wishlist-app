import React from "react";
import { useState } from "react";
import { Wish as WishModel } from "../../store/storeWishlist";
import Wish from "./Wish";

const Wishlist = ({ data }: { data: WishModel[] }) => {
  const [wishList, setWishList] = useState(data);
  const addWish = () => {
    setWishList([
      ...wishList,
      { id: Math.random().toString(), name: "hey" } as WishModel,
    ]);
  };
  return (
    <>
      <div>
        {wishList.map((item) => (
          <Wish key={item.id} data={item} />
        ))}
      </div>
      <br />
      <>
        <button onClick={addWish}>Add wish</button>
      </>
    </>
  );
};

export default Wishlist;

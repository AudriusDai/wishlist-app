import React from "react";
import { Wish as WishModel } from "../../store/storeWishlist";

const Wish = (props: { data: WishModel }) => {
  return (
    <>
      <div>{props.data.name}</div>
    </>
  );
};

export default Wish;

import React from "react";
import { Wish as WishModel } from "../../store/storeWishlist";

const Wish = (props: { data: WishModel }) => {
  return (
    <div>
      <div>{props.data.id}</div>
      <div>{props.data.name}</div>
    </div>
  );
};

export default Wish;

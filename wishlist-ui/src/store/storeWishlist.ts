export type Wish = {
  id: string;
  name: string;
};

export const addWish = (wish: Wish): void => {
  const current = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  ) as Wish[];
  const newList = [...current, wish];
  localStorage.setItem("wishlist", JSON.stringify(newList));
};
export const getWishlist = (): Wish[] =>
  JSON.parse(localStorage.getItem("wishlist") || "[]") as Wish[];
export const clearWishlist = (): void => localStorage.removeItem("wishlist");

import { clearProfile, clearToken } from "./storeAuth";

export const clearStore = () => {
  clearToken();
  clearProfile();
};

export const setToken = (token: string) => localStorage.setItem("token", token);
export const getToken = (): string => localStorage.getItem("token") || "";
export const clearToken = () => localStorage.removeItem("token");

export type Profile = {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
};

export const setProfile = (profile: Profile) =>
  localStorage.setItem("profileDetails", JSON.stringify(profile));
export const getProfile = (): Profile =>
  JSON.parse(localStorage.getItem("profileDetails") || "") as Profile;
export const clearProfile = () => localStorage.removeItem("profileDetails");

export const clearStore = () => {
  clearToken();
  clearProfile();
};

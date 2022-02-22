import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type Profile = {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
};

type State = {
  profile: Profile | null;
  token: string | null;
};

type Action =
  | { type: "UPDATE_PROFILE"; profile: Profile | null }
  | { type: "UPDATE_TOKEN"; token: string | null }
  | { type: "CLEAR" };

const initialState: State = {
  profile: null,
  token: null,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return { ...state, profile: action.profile };
    case "UPDATE_TOKEN":
      return { ...state, token: action.token };
    case "CLEAR":
      return { ...initialState };
    default:
      throw new Error();
  }
}

export const AuthContext = createContext<{
  state: State | null;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useState } from "react";

const useLoginDetails = (): any => {
  const [token, setT] = useState("");

  const setToken = (value: string) => setT(value);

  return [token, setToken];
};

export default useLoginDetails;

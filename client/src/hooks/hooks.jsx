import { useContext } from "react";
import { UserContext } from "../../utils/context";

export const useUser = () => {
  return useContext(UserContext);
};

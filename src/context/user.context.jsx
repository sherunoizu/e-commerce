import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedLisntener,
  createUserDocumentFromAuth,
} from "../utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubsrcibe = onAuthStateChangedLisntener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubsrcibe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

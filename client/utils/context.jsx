import React, { createContext, useState, useContext } from "react";

// Create a Context for the user
export const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [username, setUsernames] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsernames }}>
      {children}
    </UserContext.Provider>
  );
};


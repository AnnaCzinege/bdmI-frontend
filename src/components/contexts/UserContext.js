import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [newUser, setNewUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

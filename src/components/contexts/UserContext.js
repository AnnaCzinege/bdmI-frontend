import React, { createContext } from "react";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const registerNewUser = (newUser) => {
    Axios.post(`https://localhost:44314/api/user`, newUser).then((resp) =>
      console.log(resp)
    );
  };

  return (
    <UserContext.Provider value={{ registerNewUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

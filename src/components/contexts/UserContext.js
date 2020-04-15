import React, { createContext, useState } from "react";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [drawerType, setDrawerType] = useState("SignIn");

  const registerNewUser = (newUser) => {
    Axios.post(`https://localhost:44314/register`, newUser).then((resp) =>
      console.log(resp)
    ); //TODO
  };

  const logInUser = (User) => {
    Axios.post(`https://localhost:44314/login`, User).then((resp) =>
      console.log(User)
    ); //TODO
  };

  return (
    <UserContext.Provider
      value={{ registerNewUser, logInUser, drawerType, setDrawerType }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

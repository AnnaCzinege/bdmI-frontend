import React, { createContext, useState } from "react";
import Cookies from "universal-cookie";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [drawerType, setDrawerType] = useState("SignIn");

  const registerNewUser = (newUser) => {
    Axios.post(
      `https://localhost:44314/api/user/register`,
      newUser
    ).then((resp) => console.log(resp)); //TODO
  };

  const logInUser = (User) => {
    Axios.post(`https://localhost:44314/api/user/login`, User).then((resp) => {
      new Cookies().set("c_user", resp);
    }); //TODO
  };

  return (
    <UserContext.Provider
      value={{ registerNewUser, logInUser, drawerType, setDrawerType }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

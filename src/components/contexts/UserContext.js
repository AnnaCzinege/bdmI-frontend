import React, { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [drawerType, setDrawerType] = useState("SignIn");
  const [signInStatus, setSignInStatus] = useState("out");

  useEffect(() => {
    checkCookiesForLog();
  }, []);

  const checkCookiesForLog = () => {
    const cookies = new Cookies();
    if (!cookies.get("c_user")) {
      setSignInStatus("out");
    } else {
      setSignInStatus("in");
    }
  };

  const registerNewUser = (newUser) => {
    Axios.post(
      "https://localhost:44314/api/user/register",
      newUser
    ).then((resp) => console.log(resp)); //TODO
  };

  const logInUser = (User) => {
    Axios.post("https://localhost:44314/api/user/login", User).then((resp) => {
      new Cookies().set("c_user", resp.data);
      checkCookiesForLog();
      console.log(resp.data);
    }); //TODO
  };

  const logOutUser = () => {
    const cookies = new Cookies();
    Axios.post(
      "https://localhost:44314/api/user/logout",
      cookies.get("c_user")
    ).then((resp) => {
      if (resp.data === "You have been logged out") {
        cookies.remove("c_user");
        checkCookiesForLog();
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        registerNewUser,
        logInUser,
        logOutUser,
        drawerType,
        setDrawerType,
        checkCookiesForLog,
        signInStatus,
        setSignInStatus,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

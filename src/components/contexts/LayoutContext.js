import React, { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = (props) => {
  const [sideSize, setSideSize] = useState("-100%");
  const [authenticationSize, setAuthenticationSize] = useState("-100%");
  const [backdropStatus, setBackdropStatus] = useState("none");

  return (
    <LayoutContext.Provider
      value={{
        sideSize,
        setSideSize,
        backdropStatus,
        setBackdropStatus,
        authenticationSize,
        setAuthenticationSize,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = props => {
  const [sideSize, setSideSize] = useState("-100%");
  const [backdropStatus, setBackdropStatus] = useState("none");

  return (
    <LayoutContext.Provider
      value={{ sideSize, setSideSize, backdropStatus, setBackdropStatus }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

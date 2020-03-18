import React, { useState, createContext } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = props => {
  const [isOpen, setIsOpen] = useState("0");

  return (
    <LayoutContext.Provider value={{ isOpen, setIsOpen}}>
      {props.children}
    </LayoutContext.Provider>
  );
};

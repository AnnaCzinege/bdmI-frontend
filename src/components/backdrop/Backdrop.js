import React, { useContext } from "react";
import { StyledBackdrop } from "../elements/BackdropElements";
import { LayoutContext } from "../contexts/LayoutContext";

function Backdrop() {
  const {
    backdropStatus,
    setBackdropStatus,
    setSideSize,
    setAuthenticationSize,
  } = useContext(LayoutContext);
  const onClick = () => {
    setSideSize("-100%");
    setAuthenticationSize("-100%");
    setTimeout(() => {
      setBackdropStatus("none");
    }, 500);
  };

  return (
    <StyledBackdrop onClick={onClick} status={backdropStatus}></StyledBackdrop>
  );
}

export default Backdrop;

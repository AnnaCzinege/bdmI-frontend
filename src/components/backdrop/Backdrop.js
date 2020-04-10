import React, { useContext } from "react";
import { StyledBackdrop } from "../elements/BackdropElements";
import { LayoutContext } from "../layout/LayoutContext";

function Backdrop() {
  const { backdropStatus, setBackdropStatus, setSideSize } = useContext(
    LayoutContext
  );
  const onClick = () => {
    setSideSize("-100%");
    setTimeout(() => {
      setBackdropStatus("none");
    }, 500);
  };

  return (
    <StyledBackdrop onClick={onClick} status={backdropStatus}></StyledBackdrop>
  );
}

export default Backdrop;

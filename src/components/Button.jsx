import React from "react";
import ButtonEl from "../styles/components/buttonEl";

const Button = ({ variant, children, handleClick, btnType }) => {
  return (
    <ButtonEl variant={variant} onClick={handleClick} type={btnType}>
      {children}
    </ButtonEl>
  );
};

export default Button;

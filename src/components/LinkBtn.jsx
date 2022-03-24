import React from "react";
import LinkBtnEl from "../styles/components/linkBtnEl";

const LinkBtn = ({ children, text, variant, handleClick }) => {
  return (
    <LinkBtnEl variant={variant} onClick={handleClick}>
      <LinkBtnEl.Icon>{children}</LinkBtnEl.Icon>
      <LinkBtnEl.Text>{text}</LinkBtnEl.Text>
    </LinkBtnEl>
  );
};

export default LinkBtn;

import React from "react";
import "components/Button.scss";

const Button = (props) => {
  let buttonClass = "button"

  if (props.confirm) {
    buttonClass += " button--confirm";
  } else if (props.danger) {
    buttonClass += " button--danger";
  }

  return (
    <button className={buttonClass} {props.disabled}>{props.children}</button>
  );
}

export default Button;
import React from 'react';
import 'components/Button.scss';
import classnames from 'classnames';

const Button = (props) => {
  const { confirm, danger, onClick, disabled, children } = props;
  const buttonClass = classnames("button", {
    "button--confirm": confirm,
    "button--danger": danger
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
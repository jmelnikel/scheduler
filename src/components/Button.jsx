import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "components/Button.scss";

const Button = (props) => {
  const {
    children,
    confirm,
    danger,
    onClick,
    disabled,
  } = props;

  let buttonClass = classNames(
    'button',
    {
      'button--confirm': confirm,
      'button--danger': danger,
    }
  )

  return (
    <>
      <button
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}
      >{children}</button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  confirm: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button;


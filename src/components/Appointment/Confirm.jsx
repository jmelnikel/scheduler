import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'

const Confirm = (props) => {
  const {
    message,
    onConfirm,
    onCancel,
  } = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button danger onClick={onCancel}>Cancel</Button>
        <Button danger onClick={onConfirm}>Confirm</Button>
      </section>
    </main>
  )
}

Confirm.propTypes = {
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Confirm;


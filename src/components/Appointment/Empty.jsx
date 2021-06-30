import React from 'react';
import PropTypes from 'prop-types';

const Empty = (props) => {
  const onAdd = props.onAdd;

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  )
}

Empty.propTypes = {
  onAdd: PropTypes.func,
}

export default Empty;


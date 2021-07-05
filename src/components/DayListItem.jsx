import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import "components/DayListItem.scss";

const DayListItem = (props) => {
  const {
    name,
    spots,
    selected,
    setDay
  } = props;

  const dayClass = classnames(
    'day-list__item',
    {
      'day-list__item--selected': selected,
      'day-list__item--full': spots === 0,
    }
  )

  const formatSpots = (spots) => {
    if (spots === 0) return "no spots remaining"
    else if (spots === 1) return "1 spot remaining"
    else return `${spots} spots remaining`
  }

  return (
    <li className={dayClass} onClick={setDay}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  )
}

DayListItem.propTypes = {
  name: PropTypes.string,
  spots: PropTypes.number,
  selected: PropTypes.bool,
  setDay: PropTypes.func,
}

export default DayListItem


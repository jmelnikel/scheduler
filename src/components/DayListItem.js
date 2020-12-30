import React from 'react'
import 'components/DayListItem.scss';
import classnames from 'classnames';
import formatSpots from '../helpers/formatSpots';

const DayListItem = (props) => {
  const { name, spots, selected, setDay } = props;
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  )
}

export default DayListItem;
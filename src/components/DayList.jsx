import React from 'react'
import PropTypes from 'prop-types'
import DayListItem from './DayListItem'

const DayList = (props) => {
  const {
    days,
    day,
    setDay,
  } = props;

  const DayListItemList = days.map((item, index) => {
    const { name, spots } = item;
    return (
      <DayListItem
        key={index}
        name={name}
        spots={spots}
        selected={name === day}
        setDay={setDay}
      />
    )
  })

  return (
    <ul>
      {DayListItemList}
    </ul>
  )
}

DayList.propTypes = {
  days: PropTypes.array,
  day: PropTypes.string,
  setDay: PropTypes.func,
}

export default DayList


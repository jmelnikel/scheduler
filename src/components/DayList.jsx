import React from 'react'
import DayListItem from './DayListItem';

// Props coming in
// .days (an array)
// .day (a string)
// .setDay


const DayList = (props) => {
  const { days, day, setDay } = props;

  return (
    <ul>
      {days.map((dayItem) => {
        const { id, name, spots } = dayItem;
        return (
          <DayListItem
            key={id}
            name={name}
            spots={spots}
            selected={name === day}
            setDay={setDay}
          />
        )
      })}
    </ul>
  )
}

export default DayList;
import React from 'react';
import DayListItem from "components/DayListItem";

const DayList = (props) => {
  const {
    days,
    setDay,
  } = props;

  return (
    <ul>
      {days.map((day) => {
        const {
          id,
          name,
          spots,
        } = day;

        return <DayListItem
          key={id}
          name={name}
          spots={spots}
          selected={props.day === day.name}
          setDay={setDay}
        />
      })}
    </ul>
  )
};

export default DayList;

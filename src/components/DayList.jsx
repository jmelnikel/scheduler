import React from 'react';
import DayListItem from "components/DayListItem";

const DayList = (props) => {
  const {
    days,
    value,
    onChange,
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
          selected={value === name}
          setDay={onChange}
        />
      })}
    </ul>
  )
};

export default DayList;

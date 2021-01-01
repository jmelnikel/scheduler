import React from 'react';
import './InterviewerListItem.scss';
import classnames from 'classnames';

const InterviewerListItem = (props) => {
  const { name, avatar, selected, setInterviewer } = props;
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": selected
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li >
  )
}

export default InterviewerListItem;
import React from 'react';
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = (props) => {
  const {
    interviewers,
    onChange,
    value,
  } = props;

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((interviewer) => {
          const {
            id,
            name,
            avatar,
          } = interviewer;

          return <InterviewerListItem
            key={id}
            name={name}
            avatar={avatar}
            selected={value === id}
            setInterviewer={() => onChange(id)}
          />
        })}
      </ul>
    </section>
  );
};

export default InterviewerList;

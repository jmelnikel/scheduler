import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';


const InterviewerList = (props) => {
  const { interviewers, interviewer, setInterviewer } = props;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((interviewerItem) => {
          const { id, name, avatar } = interviewerItem;

          return (
            <InterviewerListItem
              key={id}
              name={name}
              avatar={avatar}
              selected={interviewer === id}
              setInterviewer={() => setInterviewer(id)}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default InterviewerList;
import React from 'react'
import PropTypes from 'prop-types'
import InterviewerListItem from './InterviewerListItem'
import './InterviewerList.scss';

const InterviewerList = (props) => {
  const {
    interviewers,
    interviewer,
    setInterviewer,
  } = props;

  const interviewerListItemList = interviewers.map((item, index) => {
    const { name, avatar, id } = item;
    return (
      <InterviewerListItem
        key={index}
        name={name}
        avatar={avatar}
        selected={id === interviewer}
        setinterviewer={() => { setInterviewer(id) }}
      />
    )
  })



  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerListItemList}
      </ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array,
  interviewer: PropTypes.number,
  setInterviewer: PropTypes.func,
}

export default InterviewerList


import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './InterviewerListItem.scss';

const InterviewerListItem = (props) => {
  const {
    name,
    avatar,
    selected,
    setInterviewer,
  } = props;

  const interviewerClass = classnames(
    'interviewers__item', { 'interviewers__item--selected': selected }
  )

  return (
    <li
      className={interviewerClass}
      onClick={setInterviewer}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  )
}

InterviewerListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  selected: PropTypes.bool,
  setInterviewer: PropTypes.func,
}

export default InterviewerListItem


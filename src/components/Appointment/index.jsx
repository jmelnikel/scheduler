import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import './styles.scss'

const Appointment = (props) => {
  const { interview, time } = props

  return (
    <article className="appointment">
      <Header time={time} />
      {interview ?
        <Show student={interview.student} interviewer={interview.interviewer} /> :
        <Empty />}
    </article>
  )
}
Appointment.propTypes = {
  interview: PropTypes.object,
  time: PropTypes.string,
}

export default Appointment;


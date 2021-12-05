import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import "../Appointment/styles.scss";

const Appointment = (props) => {
  const {
    time,
    interview,
  } = props;


  return (
    <article className="appointment">
      <Header time={time} />
      {interview ?
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        // onEdit={onEdit}
        // onDelete={onDelete}
        />
        :
        <Empty />
      }
    </article>
  );
};

export default Appointment;
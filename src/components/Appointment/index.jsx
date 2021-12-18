import React from 'react';
import useVisualMode from "hooks/useVisualMode";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
import "../Appointment/styles.scss";

const Appointment = (props) => {
  const {
    id,
    time,
    interview,
    interviewers,
    bookInterview,
  } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    }
    bookInterview(id, interview);
    transition(SHOW);
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        // onEdit={onEdit}
        // onDelete={onDelete}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
    </article>
  );
};

export default Appointment;

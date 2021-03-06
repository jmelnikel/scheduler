import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InterviewerList from '../InterviewerList';
import Button from '../Button'

const Form = (props) => {
  const {
    interviewers,
    onSave,
    onCancel,
  } = props;
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const cancel = () => {
    setName("");
    setInterviewer(null);
    onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel()}>Cancel</Button>
          <Button confirm onClick={onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}

Form.propTypes = {
  name: PropTypes.string,
  interviewers: PropTypes.array,
  interviewer: PropTypes.number,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Form


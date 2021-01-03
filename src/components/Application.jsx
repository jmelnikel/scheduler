import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Application.scss';
import DayList from './DayList';
import 'components/Appointment';
import Appointment from './Appointment';
import { getAppointmentsForDay, getInterview } from '../helpers/selectors'


const Application = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });
  const dailyAppointments = getAppointmentsForDay(state, state.day).map((appointmentItem) => {
    const interview = getInterview(state, appointmentItem.interview)
    return (
      < Appointment
        key={appointmentItem.id}
        {...appointmentItem}
        interview={interview}
      />
    )
  });


  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("api/days")),
      Promise.resolve(axios.get("api/appointments")),
      Promise.resolve(axios.get("api/interviewers")),
    ])
      .then((all) => {
        setState((prev) => (
          {
            ...prev,
            days: all[0].data,
            appointments: all[1].data,
            interviewers: all[2].data,
          }
        ))
      })
      .catch()
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

export default Application;
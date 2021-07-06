import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Application.scss";
import DayList from './DayList'
import Appointment from './Appointment'


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    axios.get("/api/days")
      .then((response) => {
        setDays(response.data)
      });
  }, [])

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));

  const dailyAppointments = [];

  const appointmentsList = dailyAppointments.map((appointment) => {
    const { id, time, interview } = appointment;
    return <Appointment key={id} time={time} interview={interview} />
  });

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
        {appointmentsList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
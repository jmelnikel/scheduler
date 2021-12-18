export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return []
  }

  const appointmentIdsArray = state.days.filter((stateDay) => {
    return stateDay.name === day
  });

  if (appointmentIdsArray.length === 0) {
    return []
  }

  const appointmentsArray = appointmentIdsArray[0].appointments.map((id) => {
    return state.appointments[id]
  });

  return appointmentsArray;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null
  } else {
    let interviewer = interview.interviewer
    interviewer = state.interviewers[interviewer]
    return {
      ...interview,
      interviewer,
    }
  }
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return []
  }

  const interviewIdsArray = state.days.filter((stateDay) => {
    return stateDay.name === day
  });

  if (interviewIdsArray.length === 0) {
    return []
  }

  const interviewersArray = interviewIdsArray[0].interviewers.map((id) => {
    return state.interviewers[id]
  });

  return interviewersArray;
}
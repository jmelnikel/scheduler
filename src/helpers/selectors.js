const getAppointmentsForDay = (state, day) => {
  let appointIdArray = [];
  for (let dayItem of state.days) {
    if (dayItem.name === day) {
      appointIdArray = dayItem.appointments
    }
  }

  let appointmentArray = [];
  for (let id of appointIdArray) {
    appointmentArray.push(state.appointments[id])
  }

  return appointmentArray;
};

const getInterview = (state, interview) => {
  if (interview !== null) {
    const interviewerId = interview.interviewer
    const interviewer = state.interviewers[interviewerId]

    return { ...interview, interviewer }
  } else {
    return null;
  }
}

module.exports = { getAppointmentsForDay, getInterview }
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
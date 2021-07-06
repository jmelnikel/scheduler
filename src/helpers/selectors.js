export function getAppointmentsForDay(state, day) {
  let days = state.days;
  let appointmentsForDay = [];

  const filteredDay = days.filter(item => item.name === day)

  if (filteredDay.length > 0) {
    appointmentsForDay = filteredDay[0].appointments

    appointmentsForDay = appointmentsForDay.map((appointmentNumber) => {
      return state.appointments[appointmentNumber];
    })

    return appointmentsForDay;
  }

  return [];
}
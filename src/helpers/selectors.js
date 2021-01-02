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

module.exports = { getAppointmentsForDay }
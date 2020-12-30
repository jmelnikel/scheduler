const formatSpots = (spots) => {
  if (spots >= 2) {
    return `${spots} spots remaining`;
  } else if (spots === 1) {
    return "1 spot remaining";
  } else {
    return "no spots remaining"
  }
};

export default formatSpots;
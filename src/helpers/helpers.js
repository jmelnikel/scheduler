export const formatSpots = (spots) => {
  if (spots >= 2) {
    return `${spots} spots remaining`;
  } else if (spots === 1) {
    return "1 spot remaining";
  } else {
    return "no spots remaining"
  }
};

// just exort each individual function, then ?destructure then when importining. They will automatically be bundled as a n object.
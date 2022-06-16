import React from 'react';

const getSeason = (lat, month) => {
  // check if we are in the norther or summer hemisphere, note we only have 2 season, summer nad winter
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  // get the month and our lat to see if we are summer or winter
  const season = getSeason(props.lat, new Date().getMonth())

  return (
    <div>
      Season Display!
    </div>
  );
};

export default SeasonDisplay;

import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'let\' hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
}

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
  const { text, iconName } = seasonConfig[season];


  return (
    <div className={ `season-display ${season}` }>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;

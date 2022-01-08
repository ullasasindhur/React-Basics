import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};
const SeasonalDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonalDisplay;

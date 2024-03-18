import React from "react";
import '../styles/widgetStyles.css';

export default function Widget({ heading, value, percentage, imageUrl ,colour }) {
  return (
    <div className="widgetStyles" style={{backgroundColor:colour}}>
      <span>{heading}</span>
      <div className="valueContainer">
        <p>{value}</p>
        <div>
          <p>{percentage}</p>
          <img src={imageUrl} alt="imgurl" />
        </div>
      </div>
    </div>
  );
}

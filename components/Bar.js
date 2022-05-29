import React from "react";

function Bar({ item, index, color }) {
  const {
    translateX,
    translateY,
    rectHeight,
    rectWidth,
    fillColor = "red",
    textX,
    textY,
    textValue,
  } = item;

  const colors = [
    ["rgba(61, 90, 241, 0.5)", "rgba(61, 90, 241, 0.2)"],
    ["rgba(255, 48, 79, 1)", "rgba(255, 48, 79, 0.5)"],
    ["rgba(131, 232, 90, 0.5)", "rgba(131, 232, 90, 0.2)"],
  ];

  const boxStyle = {
    width: rectWidth,
    height: rectHeight,
    background: `${colors[color || 0][0]}`,
  };
  return (
    <div>
      <div style={boxStyle}>{textValue}</div>
    </div>
  );
}

export default Bar;

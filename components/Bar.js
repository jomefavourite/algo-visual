import React from "react";

function Bar({ item, color }) {
  const {
    translateX,
    translateY,
    rectHeight,
    rectWidth = 45,
    fillColor,
    textX,
    textY,
    textValue,
  } = item;

  // console.log(colorKey, "colorKey");

  const colors = [
    ["rgba(61, 90, 241, 0.5)", "rgba(61, 90, 241, 0.2)"],
    ["rgba(255, 48, 79, 1)", "rgba(255, 48, 79, 0.5)"],
    ["rgba(131, 232, 90, 0.5)", "rgba(131, 232, 90, 0.2)"],
  ];

  // console.log(rectWidth, "rectWidth");

  const boxStyle = {
    width: "clamp(2rem, 10vw, 5rem)",
    textAlign: "center",
    maxWidth: "70px",
    height: rectHeight,
    backgroundColor: `${colors[color][0]}`,
    transition: "0.3s",
  };

  return (
    <div style={boxStyle} className='flex items-end justify-center'>
      <span className='mb-3 text-[clamp(1rem,2vw,1.5rem)]'>{textValue}</span>
    </div>
  );
}

export default Bar;

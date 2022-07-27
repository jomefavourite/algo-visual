import React from "react";

function BoxView({ item, color }) {
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

  const colors = [
    ["#3d5af17f", "#3d5af133"], // current color
    ["#ff304fff", "#ff304f7f"], // comparison color
    ["#83e85a7f", "#83e85a33"], // found color
    ["#eb7b137f", "#eb7b1333"], // not found color
  ];

  return (
    <div
      style={{ backgroundColor: `${colors[color][0]}` }}
      className={`flex h-[clamp(2rem,10vw,5rem)] w-[clamp(2rem,10vw,5rem)] items-center justify-center border-2 border-r-0 border-black  p-3 text-[clamp(1rem,2vw,1.5rem)] last:border-r-2`}
    >
      {textValue}
    </div>
  );
}

export default BoxView;

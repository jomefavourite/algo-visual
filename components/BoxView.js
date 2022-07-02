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
    ["rgba(61, 90, 241, 0.5)", "rgba(61, 90, 241, 0.2)"],
    ["rgba(255, 48, 79, 1)", "rgba(255, 48, 79, 0.5)"],
    ["rgba(131, 232, 90, 0.5)", "rgba(131, 232, 90, 0.2)"],
    ["rgba(235, 123, 19, 0.5)", "rgba(235, 123, 19, 0.2)"],
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

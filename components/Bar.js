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
    ["#3d5af17f", "#3d5af133"], // current color
    ["#ff304fff", "#ff304f7f"], // comparison color
    ["#83e85a7f", "#83e85a33"], // found color
    ["#eb7b137f", "#eb7b1333"], // not found color
  ];

  // console.log(rectWidth, "rectWidth");

  const boxStyle = {
    // width: "clamp(2rem, 10vw, 5rem)",
    textAlign: "center",
    // maxWidth: "70px",
    height: rectHeight,
    backgroundColor: `${colors[color][0]}`,
    transition: "0.3s",
  };

  return (
    <div
      style={boxStyle}
      className={`flex w-[35px] max-w-[70px] items-end justify-center md:w-[clamp(2rem,10vw,5rem)]`}
    >
      <span className='mb-3 text-[clamp(1rem,2vw,1.5rem)]'>{textValue}</span>
    </div>
  );
}

export default Bar;

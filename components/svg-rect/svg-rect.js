
import { useState, useEffect } from "react";
const SvgRect = ({ item,  index}) => {
    const {translateX,translateY,rectHeight,rectWidth,fillColor,textX,textY,textValue} = item;

    const [curSortItem,setCurSortItem] = useState(false);
    


    return (
        
          <g
          className="bar"
          id={`bar-${index}`}
           style={{ cursor:"pointer" }}
              transform={`translate(${translateX},${translateY})`}
            >
              <rect
              className="rect"
                height={`${rectHeight}`}

                width={`${rectWidth}`}


                style={{ fill: `${  fillColor }` ,cursor:"pointer" }}

              ></rect>
              <text
              className="text"
               dy='.35em' x={`${textX}`} y={`${textY}`}>
                {textValue}
              </text>

            </g>
        
    )
}

export default SvgRect;
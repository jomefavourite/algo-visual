
import { useState, useEffect } from "react";
const SvgRect = ({ item, filler , index}) => {
    const {translateX,translateY,rectHeight,rectWidth,fillColor,textX,textY,textValue,sortingColor,sortedColor,isGettingSorted,isSorted} = item;

    const [curSortItem,setCurSortItem] = useState(false);
    
    const [sorted,setSorted] = useState(false);
    const [colors,setColors] = useState(["rgb(173, 216, 230)", "rgb(13, 121, 152)","rgb(13, 121, 15)"]);

    useEffect(()=>{
        if(isGettingSorted){
            setCurSortItem(true)
        }
    },[isGettingSorted])

    // useEffect(()=>{
    //     setCurSortItem(true)
    //     setSorted(true);
    // },[isGettingSorted,curSortItem])

    const returnFillColor = () => {
        if(curSortItem){
            return sortingColor;
        }

        if(sorted){
            return sortedColor;
        }
    }
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


                style={{ fill: `${  filler }` ,cursor:"pointer" }}

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
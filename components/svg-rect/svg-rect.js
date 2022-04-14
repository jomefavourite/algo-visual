
import { useState, useEffect } from "react";
const SvgRect = ({item}) => {
    const {translateX,translateY,rectHeight,rectWidth,fillColor,textX,textY,textValue,sortingColor,sortedColor,isGettingSorted,isSorted} = item;

    const [curSortItem,setCurSortItem] = useState(false);
    const [sorted,setSorted] = useState(false);
    

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
              transform={`translate(${translateX},${translateY})`}
            >
              <rect
                height={`${rectHeight}`}
                width={`${rectWidth}`}
                style={{ fill: `${ (curSortItem) === false  ?  fillColor : returnFillColor()}` }}
              ></rect>
              <text dy='.35em' x={`${textX}`} y={`${textY}`}>

                {textValue}
              </text>
            </g>
        
    )
}

export default SvgRect;
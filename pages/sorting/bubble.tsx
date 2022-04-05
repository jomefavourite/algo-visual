import Head from "next/head";
import { useState } from "react";

function bubble() {
  const [data, setData] = useState([
    {
      transform: "translate(0,107.95918273925781)",
      textValue: "26",
      textX: "22.5",
      textY: "107.04081632653062",
      rectWidth: "45",
      rectHeight: "122.04081632653062",
    },
    {
      transform: "translate(50,136.12245178222656)",
      textValue: "20",
      textX: "22.5",
      textY: "78.87755102040816",
      rectWidth: "45",
      rectHeight: "93.87755102040816",
    },
    {
      transform: "translate(100,140.8163299560547)",
      textValue: "19",
      textX: "22.5",
      textY: "74.18367346938776",
      rectWidth: "45",
      rectHeight: "89.18367346938776",
    },
    {
      transform: "translate(150,4.693877696990967)",
      textValue: "48",
      textX: "22.5",
      textY: "210.30612244897958",
      rectWidth: "45",
      rectHeight: "225.30612244897958",
    },
    {
      transform: "translate(200,61.020408630371094)",
      textValue: "36",
      textX: "22.5",
      textY: "153.9795918367347",
      rectWidth: "45",
      rectHeight: "168.9795918367347",
    },
    {
      transform: "translate(250,0)",
      textValue: "49",
      textX: "22.5",
      textY: "215",
      rectWidth: "45",
      rectHeight: "230",
    },
    {
      transform: "translate(300,122.04081726074219)",
      textValue: "50",
      textX: "22.5",
      textY: "92.9591836734694",
      rectWidth: "45",
      rectHeight: "107.95918273925781",
    },
    {
      transform: "translate(350,211.2244873046875)",
      textValue: "4",
      textX: "22.5",
      textY: "-15",
      rectWidth: "45",
      rectHeight: "18.77551020408163",
    },
    {
      transform: "translate(400,103.26530456542969)",
      textValue: "27",
      textX: "22.5",
      textY: "111.73469387755101",
      rectWidth: "45",
      rectHeight: "126.73469387755101",
    },
    {
      transform: "translate(450,18.775510787963867)",
      textValue: "45",
      textX: "22.5",
      textY: "196.22448979591837",
      rectWidth: "45",
      rectHeight: "211.22448979591837",
    },
    {
      transform: "translate(500,61.020408630371094)",
      textValue: "36",
      textX: "22.5",
      textY: "153.9795918367347",
      rectWidth: "45",
      rectHeight: "168.9795918367347",
    },
    {
      transform: "translate(550,107.95918273925781)",
      textValue: "26",
      textX: "22.5",
      textY: "107.04081632653062",
      rectWidth: "45",
      rectHeight: "122.04081632653062",
    },
  ]);

  function bubbleSort(arr) {
    let swapped;

    do {
      swapped = false;
      for (let i = 1; i < arr.length; i++) {
        if (Number(arr[i - 1].textValue) > Number(arr[i].textValue)) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;

          swapped = true;
        }
      }
    } while (swapped === true);

    return arr;
  }

  // bubbleSort(data);

  return (
    <>
      <Head>
        <title>Bubble Sort</title>
      </Head>
      <div id='sort-viz'>
        <svg
          id='viz'
          // height='580'
          // width='900'
          // width={680}
          // height={300}
          preserveAspectRatio='xMaxYMid meet'
          viewBox='-40 0 680 300'
          className='max-w-[1000px] mx-auto'
        >
          {data.map((item, index) => (
            <g key={index} transform={`${item.transform}`}>
              <rect
                height={`${item.rectHeight}`}
                width={`${item.rectWidth}`}
                style={{ fill: "rgb(173, 216, 230)" }}
              ></rect>
              <text dy='.35em' x={`${item.textX}`} y={`${item.textY}`}>
                {item.textValue}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
}

export default bubble;

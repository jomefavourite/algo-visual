import { useState } from "react";
import Layout from "../../components/Layout";

export default function LinearSearch() {
  const [data, setData] = useState([
    {
      textValue: "26",
      translateX: "0",
      translateY: "107.95918273925781",
      textX: "22.5",
      textY: "107.04081632653062",
      rectWidth: "45",
      rectHeight: "122.04081632653062",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "20",
      translateX: "50",
      translateY: "136.12245178222656",
      textX: "22.5",
      textY: "78.87755102040816",
      rectWidth: "45",
      rectHeight: "93.87755102040816",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "19",
      translateX: "100",
      translateY: "140.8163299560547",
      textX: "22.5",
      textY: "74.18367346938776",
      rectWidth: "45",
      rectHeight: "89.18367346938776",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "48",
      translateX: "150",
      translateY: "4.693877696990967",
      textX: "22.5",
      textY: "210.30612244897958",
      rectWidth: "45",
      rectHeight: "225.30612244897958",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "36",
      translateX: "200",
      translateY: "61.020408630371094",
      textX: "22.5",
      textY: "153.9795918367347",
      rectWidth: "45",
      rectHeight: "168.9795918367347",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "49",
      translateX: "250",
      translateY: "0",
      textX: "22.5",
      textY: "215",
      rectWidth: "45",
      rectHeight: "230",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "50",
      translateX: "300",
      translateY: "122.04081726074219",
      textX: "22.5",
      textY: "92.9591836734694",
      rectWidth: "45",
      rectHeight: "107.95918273925781",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "4",
      translateX: "350",
      translateY: "211.2244873046875",
      textX: "22.5",
      textY: "-15",
      rectWidth: "45",
      rectHeight: "18.77551020408163",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "27",
      translateX: "400",
      translateY: "103.26530456542969",
      textX: "22.5",
      textY: "111.73469387755101",
      rectWidth: "45",
      rectHeight: "126.73469387755101",
      fillColor: "rgb(173, 216, 230)",
    },
    {
      textValue: "45",
      translateX: "450",
      translateY: "18.775510787963867",
      textX: "22.5",
      textY: "196.22448979591837",
      rectWidth: "45",
      rectHeight: "211.22448979591837",
      fillColor: "rgb(173, 216, 230)",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   console.log(data, "useE");
  // }, [data]);

  console.log(data, "data");

  const handleClick = (inputValue) => {
    const arrOfInputs = Number(inputValue);
    // const newChartData = generateChartData(arrOfInputs);

    setData(newChartData);
  };

  const generateRandom = () => {
    const randomArr = Array.from({ length: randomIntFromInterval(8, 12) }, () =>
      Math.floor(Math.random() * 40)
    );

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // const newChartData = generateChartData(randomArr);

    setData(newChartData);
  };

  return (
    <>
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
            <g
              key={index}
              transform={`translate(${item.translateX},${item.translateY})`}
            >
              <rect
                height={`${item?.rectHeight}`}
                width={`${item?.rectWidth}`}
                style={{ fill: `${item.fillColor}` }}
              ></rect>
              <text dy='.35em' x={`${item.textX}`} y={`${item.textY}`}>
                {item.textValue}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div>
        <input
          type='number'
          value={inputValue}
          placeholder='12,20,33,45,20'
          className='bg-black text-white'
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button onClick={() => handleClick(inputValue)}>Set inputs</button>
      </div>
    </>
  );
}

LinearSearch.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
    },
    {
      value: "Linear Search",
      href: "/searching/linear",
    },
  ];

  return <Layout options={options}>{page}</Layout>;
};

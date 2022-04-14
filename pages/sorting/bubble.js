import Head from "next/head";
import { useState, useEffect } from "react";
import { Flipper, Flipped } from 'react-flip-toolkit'
import Layout from "../../components/Layout";
import { BubbleSort , bubbleSort } from "../../util/bubblesort";
import { generateChartData } from "../../util/utility";
import SvgRect from "../../components/svg-rect/svg-rect";

export default function Bubble() {
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
    },
    {
      textValue: "48",
      translateX: "150",
      translateY: "14",
      textX: "22.5",
      textY: "200.30612244897958",
      rectWidth: "45",
      rectHeight: "215",
      fillColor: "rgb(173, 216, 230)",
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
    },
    {
      textValue: "49",
      translateX: "250",
      translateY: "10",
      textX: "22.5",
      textY: "205",
      rectWidth: "45",
      rectHeight: "220",
      fillColor: "rgb(173, 216, 230)",
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
    },
    {
      textValue: "50",
      translateX: "300",
      // translateY: "122.04081726074219",
      translateY: "0",
      textX: "22.5",
      textY: "215",
      // textY: "92.9591836734694",
      rectWidth: "45",
      // rectHeight: "107.95918273925781",
      rectHeight: "230",
      fillColor: "rgb(173, 216, 230)",
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
    },
    {
      textValue: "4",
      translateX: "350",
      translateY: "181.2244873046875",
      textX: "22.5",
      textY: "35",
      rectWidth: "45",
      rectHeight: "48.77551020408163",
      fillColor: "rgb(173, 216, 230)",
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
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
      sortingColor : "rgb(13, 121, 152)",
      sortedColor : "rgb(13, 121, 15)",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   setData(bubbleSort(data))
  // }, [data]);

  console.log(data, "data");

  const handleClick = (inputValue) => {
    const arrOfInputs = inputValue.split(",").map((str) => Number(str));

    const newChartData = generateChartData(arrOfInputs);

    setData(newChartData);
  };

  const generateRandom = () => {
    const randomArr = Array.from({ length: randomIntFromInterval(8, 12) }, () =>
      Math.floor(Math.random() * 40)
    );

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const newChartData = generateChartData(randomArr);

    setData(newChartData);
  };

  // let regex = new RegExp(/^[0-9](,[1-8])*$/);
  // let regex2 = new RegExp(/^[0-50]/);

  // const found = regex.test("2,3,4");

  // console.log(regex2.test("59"));

  function div_update(data, color) {
    setData([]);
    setData((prevState) => {
      return [...prevState, data];
    });
  }

  const handleBubbleSort = (data) => {
    // const newData = BubbleSort(data, () => {});

    const newData = bubbleSort(data);
    
    console.log(newData, "newData");
    
    setData(newData);
  };

  return (
    <>
      <Head>
        <title>Bubble Sort</title>
      </Head>
      <div id='sort-viz'>
        <Flipper flipKey="bubbleSort" spring={{ stiffness: 280, damping: 22 }}>
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
            
            <Flipped key={index} flipId={index}>

              <SvgRect  item={item} /> 

            </Flipped>



          ))}
        </svg>
        </Flipper>
      </div>

      <button onClick={generateRandom}>Generate Random</button>

      <div>
        <input
          type='text'
          value={inputValue}
          placeholder='12,20,33,45,20'
          className='bg-black text-white'
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button onClick={() => handleClick(inputValue)}>Set inputs</button>
      </div>

      <button
        className='bg-black text-white mt-28'

        onClick={() => handleBubbleSort(data)}

      >
        Play
      </button>
    </>
  );
}

Bubble.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
    },
    {
      value: "Bubble Sort",
      href: "/sorting/bubble",
    },
  ];

  return <Layout options={options}>{page}</Layout>;
};

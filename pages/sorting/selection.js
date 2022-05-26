import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../../redux/algo.actions";
import { times }     from 'lodash';
import Layout from "../../components/Layout/Layout";
import { waitforAnim } from "../../util/bubblesort";

import { generateChartData } from "../../util/utility";
import SvgRect from "../../components/svg-rect/svg-rect";
import { randomIntFromInterval } from "../../util/utility";
import Footer from "../../components/Layout/Footer";

export default function Selection() {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.algo.arr);
  const [playing, setPlaying] = useState(false);
  
  const [inputValue, setInputValue] = useState("");
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
    },
    {
      textValue: "50",
      translateX: "300",
      translateY: "122.04081726074219",
      translateY: "0",
      textX: "22.5",
      textY: "215",
      textY: "92.9591836734694",
      rectWidth: "45",
      rectHeight: "107.95918273925781",
      rectHeight: "230",
      fillColor: "rgb(173, 216, 230)",
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
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
      sortingColor: "rgb(13, 121, 152)",
      sortedColor: "rgb(13, 121, 15)",
    },
  ]);
  const [allColors, setAllColors] = useState([
    "#3B82F6",
    "#8B5CF6",
    "#F59E0B",
    "#EF4444",
    "rgb(13, 121, 15)",
    "rgb(173, 216, 230)",
        "rgb(13, 121, 152)"
  ]);


  const handleClick = (inputValue) => {
    const arrOfInputs = inputValue.split(",").map((str) => Number(str));
    const newChartData = generateChartData(arrOfInputs);

    setData(newChartData);
  };

  const generateRandom = () => {
    const randomArr = Array.from({ length: randomIntFromInterval(8, 12) }, () =>
      Math.floor(Math.random() * 40)
    );
    const newChartData = generateChartData(randomArr);

    setData(newChartData);
    // setCurrentStep(0);
  };

  // let regex = new RegExp(/^[0-9](,[1-8])*$/);
  // let regex2 = new RegExp(/^[0-50]/);
  // const found = regex.test("2,3,4");
  // console.log(regex2.test("59"));

  const speed =
    570 - Math.pow(arr.length, 2) > 0 ? 570 - Math.pow(arr.length, 2) : 0;


  const handleSelectionSort = async () => {
    console.log("selection called")
    setPlaying(true);
    let res = [...data];

    const swapper = (data, i, j) =>{
      const { translateX: x1, translateY: y1 } = data[i];
      const { translateX: x2, translateY: y2 } = data[j];
      data[i].translateX = x2;
      data[j].translateX = x1;
      [data[i] , data[j] ] = [data[j] , data[i]];
    };

    for(let i = 0;i < res.length;i++){
        let min = i;
        res[min].fillColor =  "#F59E0B";
        await waitforAnim();
        setData([...res]);

        for(let j = i+1;j < res.length;j++){

            if(+res[min].textValue > +res[j].textValue){
                res[min].fillColor =  "rgb(173, 216, 230)";
                res[j].fillColor =  "#F59E0B";
                min = j;
            }
            await waitforAnim();
            setData([...res]);
        }

        
        if(min !== i) swapper(res,i,min);
        await waitforAnim();
        setData([...res]);
    }


    setPlaying(false);
  };

  return (
    <>
      <Head>
        <title>Selection Sort</title>
      </Head>

      <div id='sort-viz' className='pt-[200px]'>
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
          {data.map((item, index) => {
            return (
              <SvgRect key={index} index={index} item={item}  />
            );
          })}
        </svg>
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
      <Footer handleSort={handleSelectionSort} playing={playing} />
    </>
  );
}

Selection.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
      active: false,
    },
    {
      value: "Bubble Sort",
      href: "/sorting/bubble",
      active: false
    },
    {
      value: "Selection Sort",
      href: "/sorting/selection",
      active: true,
    },
    {
      value: "Insertion Sort",
      href: "#",
      active: false,
    },
    {
      value: "Merge Sort",
      href: "#",
      active: false,
    },
    {
      value: "Merge Sort",
      href: "#",
      active: false,
    },
    {
      value: "Quick Sort",
      href: "#",
      active: false,
    },
  ];

  return <Layout options={options}>{page}</Layout>;
};

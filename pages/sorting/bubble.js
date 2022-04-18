import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../../redux/algo.actions";
import { times }     from 'lodash';
import Layout from "../../components/Layout";
import bubbleSort2,{ BubbleSort , bubbleSort , waitforAnim } from "../../util/bubblesort";

import { generateChartData } from "../../util/utility";
import SvgRect from "../../components/svg-rect/svg-rect";
import { randomIntFromInterval } from "../../util/utility";
import Footer from "../../components/Layout/Footer";

export default function Bubble() {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.algo.arr);
  const currentSwapItems = useSelector((state) => state.algo.currentSwapItems);
  const currentSortedItems = useSelector(
    (state) => state.algo.currentSortedItems
  );
  const currentBubbleItems = useSelector(
    (state) => state.algo.currentBubbleItems
  );
  // const gRef = useRef();
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
      // translateY: "122.04081726074219",
      translateY: "0",
      textX: "22.5",
      textY: "215",
      // textY: "92.9591836734694",
      rectWidth: "45",
      // rectHeight: "107.95918273925781",
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
    "#EF4444",
    "#3B82F6",
    "#8B5CF6",
    "#F59E0B",
    "rgb(173, 216, 230)",
    "rgb(13, 121, 152)",
    "rgb(13, 121, 15)",
  ]);

  useEffect(() => {
    dispatch(setArray(data));
  }, [data]);

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

  const handleBubbleSort = () => {
    const rects = document.querySelectorAll(".bar .rect");
    console.log(rects);

    // for(let i = 0 ; i < rects.length ;i++){
    //   rects[i].style.fill=allColors[0]
    // }

    const newData = bubbleSort(arr);

    // bubbleSort2(data,dispatch,10000);

    setData(newData);
  };

  const handleBubblePlay = async () => {
    const swapRectNodes = (node1, node2, data, i, j) => {
      const { translateX: x1, translateY: y1 } = data[i];
      const { translateX: x2, translateY: y2 } = data[j];
      const [tempX, tempY] = [x1, y1];
      const node1Parent = node1.parentNode;
      const node2Parent = node2.parentNode;
      // console.log(node1Parent)
      node1Parent.style.transform = `translate(${x2}px,${y2}px)`;
      node2Parent.style.transform = `translate(${tempX}px,${tempY}px)`;

      // data[i].translateX = x2;
      // data[j].translateX = tempX;

      // data[i].translateY = y2;
      // data[j].translateY = tempY;

      // [ data[i] , data[j] ] = [ data[j] , data[i] ];

      // const afterNode2 = node2.nextElementSibling;
      // const parent = node2.parentNode;
      // node1.replaceWith(node2);
      // parent.insertBefore(node1, afterNode2);
    };

    let results = data;
    const rects = document.querySelectorAll(".bar .rect");
    const txts = document.querySelectorAll(".bar .text");

    const swapper = (data, i, j) => {
      const { translateX: x1, translateY: y1 } = data[i];
      const { translateX: x2, translateY: y2 } = data[j];
      const [tempX, tempY] = [x1, y1];
      data[i].translateX = x2;
      data[j].translateX = tempX;
      [data[i], data[j]] = [data[j], data[i]];
    };

    for (let i = results.length; i > 0; i--) {
      for (var j = 0; j < i - 1; j++) {
        rects[j].style.fill = allColors[0];
        rects[j + 1].style.fill = allColors[0];

        await waitforAnim();

        // results[j].isGettingSorted = true;

        if (+results[j].textValue > +results[j + 1].textValue) {
          rects[j + 1].style.fill = allColors[1];

          await waitforAnim();

          swapRectNodes(rects[j], rects[j + 1], results, j, j + 1);

          // await waitforAnim();
          // swapper(results,j,j+1);
          //   console.log("start waiting after swap")
          //   rects[j].style.fill = allColors[2];
          //   rects[j+1].style.fill = allColors[2];
          //   await waitforAnim();
          //   console.log("finished waiting after swap")
        }

        rects[j + 1].style.fill = allColors[2];
        rects[j].style.fill = allColors[2];
      }
    }

    return results;
  };

  return (
    <>
      <Head>
        <title>Bubble Sort</title>
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
            const filler = currentSwapItems.includes(index)
              ? "rgba(219, 57, 57, 0.8)"
              : currentBubbleItems.includes(index)
              ? "rgba(237, 234, 59, 0.8)"
              : currentSortedItems.includes(index)
              ? "rgba(169, 92, 232, 0.8)"
              : "rgb(173, 216, 230)";

            // console.log(filler)
            return (
              <SvgRect key={index} index={index} item={item} filler={filler} />
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

      <button className='bg-black text-white mt-28' onClick={handleBubblePlay}>
        Play
      </button>

      <Footer handleBubblePlay={handleBubblePlay} />
    </>
  );
}

Bubble.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
      active: false,
    },
    {
      value: "Bubble Sort",
      href: "/sorting/bubble",
      active: true,
    },
    {
      value: "Selection Sort",
      href: "#",
      active: false,
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

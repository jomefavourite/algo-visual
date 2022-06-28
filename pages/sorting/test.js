import Head from "next/head";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../../redux/algo.actions";
import { cloneDeep } from "lodash";
import Layout from "../../components/Layout/Layout";
import {
  generateDataSteps,
  sampleDataSteps,
  waitforAnim,
} from "../../util/bubblesort";

import { generateChartData } from "../../util/utility";
import { randomIntFromInterval } from "../../util/utility";
import Footer from "../../components/Layout/Footer";
import Dropdown from "../../components/Dropdown";
import Bar from "../../components/Bar";

export default function Bubble() {
  const arr = useSelector((state) => state.algo.arr);
  const [playing, setPlaying] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    {
      textValue: "26",
      textY: "107.04081632653062",
      rectWidth: "45",
      rectHeight: "122.04081632653062",
    },
    {
      textValue: "20",
      textY: "78.87755102040816",
      rectWidth: "45",
      rectHeight: "93.87755102040816",
    },
    {
      textValue: "19",
      textY: "74.18367346938776",
      rectWidth: "45",
      rectHeight: "89.18367346938776",
    },
    {
      textValue: "48",
      textY: "200.30612244897958",
      rectWidth: "45",
      rectHeight: "215",
    },
    {
      textValue: "36",
      textY: "153.9795918367347",
      rectWidth: "45",
      rectHeight: "168.9795918367347",
    },
    {
      textValue: "49",
      textY: "205",
      rectWidth: "45",
      rectHeight: "220",
    },
    {
      textValue: "50",
      textX: "22.5",
      textY: "215",
      textY: "92.9591836734694",
    },
    {
      textValue: "4",
      textY: "35",
      rectWidth: "45",
      rectHeight: "48.77551020408163",
    },
    {
      textValue: "27",
      textY: "111.73469387755101",
      rectWidth: "45",
      rectHeight: "126.73469387755101",
    },
    {
      textValue: "45",
      textY: "196.22448979591837",
      rectWidth: "45",
      rectHeight: "211.22448979591837",
    },
  ]);
  const [dataSteps, setDataSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [delay, setDelay] = useState(500);
  const [timeouts, setTimeouts] = useState([]);
  const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [colorSteps, setColorSteps] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [count, setCount] = useState(10);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    generateRandom();
  }, []);

  useEffect(() => {
    console.log(currentStep, "currentStep");
    console.log(data, "data");
  }, [currentStep]);

  // useEffect(() => {
  //   if (reset === true) {
  //     setCurrentStep(0);
  //     setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //     setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  //     console.log("reset true");
  //   }
  //   return () => {
  //     setReset(false);
  //   };
  // }, [reset]);

  const handleInputClick = (e, inputValue) => {
    e.preventDefault();
    // setReset(true);
    setCurrentStep(0);
    setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
    // console.log(colorSteps, "reset handle click");

    // console.log(colorSteps, "colorSteps");

    const arrOfInputs = inputValue.split(",").map((str) => Number(str));
    const newChartData = generateChartData(arrOfInputs);
    // const cloneNewChartData = JSON.parse(JSON.stringify(newChartData));
    const cloneNewChartData = cloneDeep(newChartData);
    const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));

    // console.log(newChartData, "newChartData");
    // console.log(cloneNewChartData, "cloneNewChartData");

    const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
      cloneNewChartData,
      cloneColorSteps
    );

    console.log(newColorSteps, "newColorSteps");

    // console.log(dataSteps, "dataSteps");

    setData(newChartData);
    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
  };

  const generateRandom = () => {
    clearTimeouts();
    clearColorKey();

    // Maximum item in the array is 50 and least is 1
    const randomArr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 49) + 1
    );
    const newChartData = generateChartData(randomArr);
    const cloneNewChartData = cloneDeep(newChartData);
    const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));
    // const cloneColorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
      cloneNewChartData,
      cloneColorSteps
    );

    setData(newChartData);
    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
  };

  const previousStep = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
    setData(dataSteps[currentStep - 1]);
    setColorKey(colorSteps[currentStep - 1]);
  };

  const nextStep = () => {
    if (currentStep >= dataSteps.length - 1) return;
    setCurrentStep(currentStep + 1);
    setData(dataSteps[currentStep + 1]);
    setColorKey(colorSteps[currentStep + 1]);
  };

  const start = async () => {
    // let steps = dataSteps;
    // let colorSteps = this.state.colorSteps;

    clearTimeouts();

    let timeouts = [];
    let i = 0;

    // while (i < dataSteps.length - currentStep) {
    //   let timeout = setTimeout(() => {
    //     console.log(currentStep, "currentStep in while");
    //     setData(dataSteps[currentStep]);
    //     setColorKey(colorSteps[currentStep]);
    //     setCurrentStep(currentStep + 1);
    //   }, delay * i);

    //   setTimeouts([timeout]);
    //   i++;
    // }

    while (i < dataSteps.length - currentStep) {
      let timeout = setTimeout(() => {
        console.log(currentStep, "currentStep in while");
        setData(dataSteps[currentStep]);
        setColorKey(colorSteps[currentStep]);
        setCurrentStep(currentStep + 1);
        timeouts.push(timeout);
      }, delay * i);
      i++;
    }

    setTimeouts([...timeouts]);
  };

  const clearTimeouts = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setTimeouts([]);
  };

  const waitforAnim2 = function (delay = 1000, i) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, delay * i);
    });
  };

  // const reset = () => {
  //   setCurrentStep(0);
  //   setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  // };

  const clearColorKey = () => {
    let blankKey = new Array(count).fill(0);

    setColorKey([...blankKey]);
    setColorSteps([blankKey]);
  };

  // let regex = new RegExp(/^[0-9](,[1-8])*$/);
  // let regex2 = new RegExp(/^[0-50]/);
  // const found = regex.test("2,3,4");
  // console.log(regex2.test("59"));

  const speed =
    570 - Math.pow(arr.length, 2) > 0 ? 570 - Math.pow(arr.length, 2) : 0;

  const handleBubbleSort = async () => {
    console.log("clicked called");
    setPlaying(true);
    let res = [...data];

    const swapper = (data, i, j) => {
      const { translateX: x1, translateY: y1 } = data[i];
      const { translateX: x2, translateY: y2 } = data[j];
      data[i].translateX = x2;
      data[j].translateX = x1;
      [data[i], data[j]] = [data[j], data[i]];
    };

    for (let i = res.length; i > 0; i--) {
      for (var j = 0; j < i - 1; j++) {
        res[j].fillColor = "#F59E0B";
        res[j + 1].fillColor = "#F59E0B";
        setData([...res]);
        await waitforAnim();

        if (+res[j].textValue > +res[j + 1].textValue) {
          await waitforAnim();
          swapper(res, j, j + 1);
          await waitforAnim();
          setData([...res]);
        }

        res[j].fillColor = "rgb(173, 216, 230)";
        res[j + 1].fillColor = "rgb(173, 216, 230)";
      }

      res[i - 1].fillColor = "#3B82F6";
    }

    setPlaying(false);
  };

  return (
    <>
      <Head>
        <title>Bubble Sort</title>
      </Head>
      <section className='h-[calc(100vh-196px)]'>
        <Dropdown />

        <div className='mt-20 min-h-[320px]'>
          <div className='flex h-[300px] items-end justify-center gap-3 px-3'>
            {data.map((item, index) => (
              <Bar key={index} item={item} color={colorKey[index]} />
            ))}
          </div>
        </div>

        <button onClick={generateRandom}>Generate Random</button>

        <form onSubmit={(e) => handleInputClick(e, inputValue)}>
          <input
            type='text'
            value={inputValue}
            placeholder='12,20,33,45,20'
            className='bg-black text-white'
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button>Set inputs</button>
        </form>
      </section>

      <Footer
        handleSort={handleBubbleSort}
        start={start}
        playing={playing}
        nextStep={nextStep}
        previousStep={previousStep}
      />
    </>
  );
}

Bubble.getLayout = function getLayout(page) {
  const pageTitle = "Sorting Algorithm";
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
      href: "/#",
      active: false,
    },
    {
      value: "Insertion Sort",
      href: "/#",
      active: false,
    },
  ];

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

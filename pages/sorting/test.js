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
} from "../../util/sort/bubblesort";

import { generateChartData } from "../../util/utility";
import { randomIntFromInterval } from "../../util/utility";
import Footer from "../../components/Layout/Footer";
import Dropdown from "../../components/Dropdown";
import Bar from "../../components/Bar";
import {
  handleInputClick,
  generateRandom,
  previousStep,
  nextStep,
  start,
  pauser,
  handleNavigation,
} from "../../util/sort";

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
  // const [isPaused, setIsPause] = useState(true);
  // const [startController, setStartController] = useState(false);

  useEffect(() => {
    generateRandom(
      clearTimeouts,
      clearColorKey,
      colorSteps,
      generateDataSteps,
      setData,
      setColorSteps,
      setCurrentStep,
      setDataSteps
    );
  }, []);

  useEffect(() => {
    console.log(currentStep, "currentStep");
    // console.log(data, "data");
    console.log(dataSteps, "dataSteps");
  }, [currentStep]);

  const handlePreviousStep = () => {
    previousStep(
      currentStep,
      setCurrentStep,
      setData,
      dataSteps,
      setColorKey,
      colorSteps
    );
  };

  const handleNextStep = () => {
    nextStep(
      currentStep,
      setCurrentStep,
      setData,
      dataSteps,
      setColorKey,
      colorSteps
    );
  };

  const handleStart = () => {
    start(
      clearTimeouts,
      currentStep,
      setPlaying,
      dataSteps,
      setCurrentStep,
      setData,
      setColorKey,
      playing,
      colorSteps
    );
  };

  const handlePause = () => {
    pauser(setPlaying);
  };

  const handleGenerateRandom = () => {
    generateRandom(
      clearTimeouts,
      clearColorKey,
      colorSteps,
      generateDataSteps,
      setData,
      setColorSteps,
      setCurrentStep,
      setDataSteps
    );
  };

  const clearTimeouts = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setTimeouts([]);
    0;
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

        <button onClick={() => handleGenerateRandom()}>Generate Random</button>

        <form
          onSubmit={(e) =>
            handleInputClick(
              e,
              inputValue,
              setCurrentStep,
              setColorKey,
              setColorSteps,
              colorSteps,
              generateDataSteps,
              setData,
              setDataSteps
            )
          }
        >
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
        // handleSort={handleBubbleSort}
        start={handleStart}
        playing={playing}
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        pauser={handlePause}
      />
    </>
  );
}

Bubble.getLayout = function getLayout(page) {
  const pageTitle = "Sorting Algorithm";
  const options = handleNavigation("bubble");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

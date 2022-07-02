import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { generateDataSteps } from "../../util/sort/bubblesort";
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
import BoxView from "../../components/BoxView";
import Loader from "../../components/Loader";

export default function Bubble() {
  const [playing, setPlaying] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [dataSteps, setDataSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [delay, setDelay] = useState(500);
  const [timeouts, setTimeouts] = useState([]);
  const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [colorSteps, setColorSteps] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [count, setCount] = useState(10);
  const [view, setView] = useState("chartView");

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

      <div className='container h-[calc(100vh-196px)]'>
        <Dropdown view={view} setView={setView} />

        <div className='mt-20 grid min-h-[320px] place-content-center'>
          {data.length === 0 ? (
            <Loader />
          ) : (
            <>
              {view === "chartView" && (
                <div className='flex h-[300px] items-end justify-center gap-3 px-3'>
                  {data.map((item, index) => (
                    <Bar key={index} item={item} color={colorKey[index]} />
                  ))}
                </div>
              )}

              {view === "boxView" && (
                <div className='flex justify-center'>
                  {data.map((item, index) => (
                    <BoxView key={index} item={item} color={colorKey[index]} />
                  ))}
                </div>
              )}
            </>
          )}
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
            pattern='^[-+]?(\d{1,3})(,?(?1))*$'
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button>Set inputs</button>
        </form>
      </div>

      <Footer
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

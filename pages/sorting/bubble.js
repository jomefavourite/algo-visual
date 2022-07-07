import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { generateDataSteps } from "../../util/sort/bubblesort";
import Footer from "../../components/Layout/Footer";
import Dropdown from "../../components/Dropdown";
import {
  handleInputClick,
  generateRandom,
  previousStep,
  nextStep,
  start,
  pauser,
  handleNavigation,
} from "../../util/sort";
import Views from "../../components/Views";

export default function Bubble() {
  const [playing, setPlaying] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [dataSteps, setDataSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeouts, setTimeouts] = useState([]);
  const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [colorSteps, setColorSteps] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [view, setView] = useState("chartView");
  const [speedControl, setSpeedControl] = useState({
    speed: 50,
    delay: 500,
  });

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
      colorSteps,
      speedControl.delay
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
    const count = 10;
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

        <Views data={data} view={view} colorKey={colorKey} />

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
        speedControl={speedControl}
        setSpeedControl={setSpeedControl}
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

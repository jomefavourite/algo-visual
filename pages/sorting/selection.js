import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { generateDataSteps } from "../../util/sort/selectionsort";
import Footer from "../../components/Layout/Footer";
import Dropdown from "../../components/Dropdown";
import Views from "../../components/Views";
import {
  handleInputClick,
  generateRandom,
  previousStep,
  nextStep,
  start,
  pauser,
  handleNavigationSort,
} from "../../util/sort";
import GeneratorController from "../../components/GeneratorController";

export default function Selection() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValueArrLen = inputValue.split(",").length;

    if (inputValueArrLen <= 0) {
      toast.error("Please enter data set values");
      return;
    }
    if (inputValueArrLen > 10) {
      toast.error("Please enter a maximum of 10 values");
      return;
    }

    handleInputClick(
      // e,
      inputValue,
      setCurrentStep,
      setColorKey,
      setColorSteps,
      colorSteps,
      generateDataSteps,
      setData,
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
        <title>Selection Sort</title>
      </Head>

      <div className='container min-h-[calc(100vh-196px)]'>
        <Dropdown view={view} setView={setView} />

        <Views data={data} view={view} colorKey={colorKey} />

        <GeneratorController
          type={"sorting"}
          handleGenerateRandom={handleGenerateRandom}
          handleSubmit={handleSubmit}
          setInputValue={setInputValue}
        />
      </div>

      <Footer
        start={handleStart}
        playing={playing}
        nextStep={handleNextStep}
        previousStep={handlePreviousStep}
        pauser={handlePause}
        speedControl={speedControl}
        setSpeedControl={setSpeedControl}
        type='sorting'
      />
    </>
  );
}

Selection.getLayout = function getLayout(page) {
  const pageTitle = "Sorting Algorithm";
  const options = handleNavigationSort("selection");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

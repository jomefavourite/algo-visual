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
import Modal from "../../components/Modal";
import { classNames } from "../../util/utility";
import { Tab } from "@headlessui/react";
import { toast } from "react-hot-toast";

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

  const [isModalOpen, setIsModalOpen] = useState(true);

  const tabItemHeading = ["Selection Sort", "Algorithm", "Guide"];

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

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tabItemHeading={tabItemHeading}
        sorting={true}
      >
        <TabPanel />
      </Modal>

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

const TabPanel = () => {
  return (
    <>
      <Tab.Panel
        className={classNames(
          "rounded-xl bg-white p-3",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
        )}
      >
        <div className='space-y-3 text-sm'>
          <p>
            Selection sort is a simple sorting algorithm that performs better
            than bubble sort but worse than insertion sort in terms of
            efficiency. It chooses the first element in the list, which is
            either the smallest or largest element depending on whether the list
            should be sorted in ascending or descending order, and then swaps it
            with the element in the first position.
          </p>
          <p>
            The second step involves selecting the element with the second rank
            and swapping it with the one in the second position. This is done by
            selecting the element with the first rank in the list of 'n-1'
            elements and leaving the one selected in the first step.
          </p>
          <p>
            This operation is repeated until the value with rank 'n-1' is
            established and placed in the desired location, at which point the
            element with rank 'n' is automatically placed in the desired
            location. It is preferred to be implemented when the size of the
            data set is small
          </p>
        </div>
      </Tab.Panel>
      <Tab.Panel
        className={classNames(
          "rounded-xl bg-white p-3",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
        )}
      >
        <div className='text-sm'>
          <span className='block'>SelectionSort (Array list)</span>
          <span className='block'>
            Step 1: Set Min to location 0 in Step 1.
          </span>
          <span className='block'>
            Step 2: Look for the smallest element on the list.
          </span>
          <span className='block'>
            Step 3: Replace the value at location Min with a different value.
          </span>
          <span className='block'>
            Step 4: Increase Min to point to the next element
          </span>
          <span className='block'>
            Step 5: Continue until the list is sorted.
          </span>
        </div>
      </Tab.Panel>
    </>
  );
};

Selection.getLayout = function getLayout(page) {
  const pageTitle = "Sorting Algorithm";
  const options = handleNavigationSort("selection");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

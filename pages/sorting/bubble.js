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
  handleNavigationSort,
} from "../../util/sort";
import Views from "../../components/Views";
import GeneratorController from "../../components/GeneratorController";
import { toast } from "react-hot-toast";
import Modal from "../../components/Modal";
import { classNames } from "../../util/utility";
import { Tab } from "@headlessui/react";

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
  const [isModalOpen, setIsModalOpen] = useState(true);

  const tabItemHeading = ["Bubble Sort", "Algorithm", "Guide"];

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
        <title>Bubble Sort</title>
      </Head>

      <div className='container min-h-[calc(100vh-196px)]'>
        <Dropdown
          view={view}
          setView={setView}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

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
            Bubble Sort is a simple but slow sorting algorithm that operates on
            the concept of bubbling out the smallest or largest element from an
            array depending on whether it needs to be sorted in descending or
            ascending order.
          </p>
          <p>
            It compares each array element to its neighboring element and swaps
            them if they are in the wrong order. If the array has n elements,
            the first round involves 'n-1' comparisons of neighbouring values,
            which filters out the element with rank 'n' and moves it to the last
            position.
          </p>
          <p>
            This process is repeated 'n-1' times or until the array is sorted,
            at which point it makes a pass around the array without exchanging
            any pairs of elements. This approach is inefficient when the length
            of the input array is quite long; hence it should not be used for a
            huge dataset
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
          <span className='block'>BubbleSort ( Array Arr )</span>
          <span className='block'>// Arr is the name of the array</span>
          <span className='block'>Step 1: n = length(Arr) </span>
          <span className='block'>Step 2: repeat </span>
          <span className='block'>Step 3: swapped = false </span>
          <span className='block'>Step 4: for i = 1 to n - 1 </span>
          <span className='block'>Step 5: if Arr[i - 1] > Arr[i], then </span>
          <span className='block'>Step 6: swap(Arr[i - 1], Arr[i]) </span>
          <span className='block'>Step 7: swapped = true </span>
          <span className='block'>Step 8: end if </span>
          <span className='block'>Step 9: end for</span>
          <span className='block'>Step 10: n = n - 1 </span>
          <span className='block'>Step 11: until not swapped </span>
          <span className='block'>Step 12: end BubbleSort</span>
        </div>
      </Tab.Panel>
    </>
  );
};

Bubble.getLayout = function getLayout(page) {
  const pageTitle = "Sorting Algorithm";
  const options = handleNavigationSort("bubble");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

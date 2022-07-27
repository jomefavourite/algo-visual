import { cloneDeep } from "lodash";
import Head from "next/head";
import { useEffect, useState } from "react";
import Bar from "../../components/Bar";
import BoxView from "../../components/BoxView";
import Dropdown from "../../components/Dropdown";
import GeneratorController from "../../components/GeneratorController";
import Footer from "../../components/Layout/Footer";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Views from "../../components/Views";
import { generateDataSteps } from "../../util/search/linear";
import { handleNavigationSearch } from "../../util/search";
import { generateChartData, waitForme, classNames } from "../../util/utility";
import toast from "react-hot-toast";
import { Tab } from "@headlessui/react";

export default function Linear() {
  const [data, setData] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataSteps, setDataSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [colorSteps, setColorSteps] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [view, setView] = useState("boxView");
  const [speedControl, setSpeedControl] = useState({
    speed: 50,
    delay: 500,
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const tabItemHeading = ["Linear Search", "Algorithm", "Guide"];

  useEffect(() => {
    setIsModalOpen(localStorage?.getItem("isChecked") ? false : true);
  }, []);

  useEffect(() => {
    generateRandom();
  }, []);

  useEffect(() => {
    console.log(colorSteps, "colorSteps");
  }, [inputValue]);

  const generateRandom = () => {
    clearColorKey();
    let randomArr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 49) + 1
    );

    const newChartData = generateChartData(randomArr);

    const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
      data,
      Number(inputValue) ? Number(inputValue) : 0,
      colorSteps
    );

    setData(newChartData);
    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
  };

  const startSearch = async () => {
    // setPlaying(true);
    // console.log(dataSteps, "dataSteps.....");
    for (let i = 0; i < dataSteps.length; i++) {
      setCurrentStep((prev) => prev + 1);
      setData(() => dataSteps[i]);
      setColorKey(() => colorSteps[i]);
      await waitForme(speedControl.delay);
    }

    let indexData = colorSteps[colorSteps.length - 1].findIndex(
      (item) => item === 2
    );

    if (colorSteps[colorSteps.length - 1][0] === 3) {
      toast.error("Search key not found");
    } else {
      toast.success(
        `Search key ${data[indexData].textValue} is found at index ${indexData}`
      );
    }
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

  const clearColorKey = () => {
    const count = 10;
    let blankKey = new Array(count).fill(0);

    setColorKey([...blankKey]);
    setColorSteps([blankKey]);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    clearColorKey();

    const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
      data,
      Number(e.target.value),
      colorSteps
    );

    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
  };

  return (
    <>
      <Head>
        <title>Linear Search</title>
      </Head>

      <div className='container h-[calc(100vh-196px)]'>
        <Dropdown
          view={view}
          setView={setView}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <Views data={data} view={view} colorKey={colorKey} />

        <GeneratorController
          type={"searching"}
          generateRandom={generateRandom}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tabItemHeading={tabItemHeading}
      >
        <TabPanel />
      </Modal>

      <Footer
        start={startSearch}
        playing={playing}
        nextStep={nextStep}
        previousStep={previousStep}
        speedControl={speedControl}
        setSpeedControl={setSpeedControl}
        colorSteps={colorSteps}
        setPlaying={setPlaying}
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
            Linear search is a sequential searching algorithm where each and
            every element of the entire list is compared with the search key
            until it's is found or not.
          </p>
          <p>
            If the comparison is equal, the search ends and is considered
            successful.
          </p>
          <p>
            The best-case scenario for a list with n items is when the value of
            the item to be searched is equal to the first element of the list;
            in this case, only one comparison is required. The worst-case
            scenario is when the value is not in the list, or just appears once
            at the end; in this instance, n comparisons are required
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
          <span className='block'>Linear Search ( Array Arr, Value key ) </span>
          <span className='block'>
            // Input: Arr is the name of the array, the key is the search
            element
          </span>
          <span className='block'>Step 1: Set i to 0 </span>
          <span className='block'>
            {
              "Step 2: if i > n then go to step 7 // n is the number of elements in array"
            }
          </span>
          <span className='block'>
            Step 3: if Arr[i] = key then go to step 6
          </span>
          <span className='block'>Step 4: Set i to i + 1</span>
          <span className='block'>Step 5: Goto step 2</span>
          <span className='block'>
            Step 6: Print the element key found at index i and go to step 8
          </span>
          <span className='block'>Step 7: Print element not found</span>
          <span className='block'>Step 8: Exit</span>
        </div>
      </Tab.Panel>
    </>
  );
};

Linear.getLayout = function getLayout(page) {
  const pageTitle = "Searching Algorithms";
  const options = handleNavigationSearch("linear");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

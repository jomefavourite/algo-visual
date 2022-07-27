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
import Views from "../../components/Views";
import { generateDataSteps } from "../../util/search/binary";
import { handleNavigationSearch } from "../../util/search";
import { generateChartData, classNames, waitForme } from "../../util/utility";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";
import { Tab } from "@headlessui/react";

export default function BinarySearch() {
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
  const [indexStep, setIndexStep] = useState([[0, 4, 9]]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const tabItemHeading = ["Binary Search", "Algorithm", "Guide"];

  useEffect(() => {
    generateRandom();
  }, []);

  useEffect(() => {
    console.log(colorSteps.length, "colorSteps");
    console.log(indexStep, "indexStep--useEffect");
  }, [inputValue, indexStep]);

  const generateRandom = () => {
    clearColorKey();
    let randomArr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 49) + 1
    );

    const newChartData = generateChartData(randomArr, 300, true); // true means it's sorted

    const {
      dataSteps,
      colorSteps: newColorSteps,
      indexStep: newIndexStep,
    } = generateDataSteps(
      data,
      Number(inputValue) ? Number(inputValue) : 0,
      colorSteps
    );

    console.log(newIndexStep, "newIndexStep");

    setData(newChartData);
    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
    setIndexStep(newIndexStep);
  };

  const startSearch = async () => {
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

    const {
      dataSteps,
      colorSteps: newColorSteps,
      indexStep: newIndexStep,
    } = generateDataSteps(data, Number(e.target.value), colorSteps);

    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
    setIndexStep(newIndexStep);
  };

  return (
    <>
      <Head>
        <title>Binary Search</title>
      </Head>

      <div className='container h-[calc(100vh-196px)]'>
        <Dropdown
          view={view}
          setView={setView}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <Views
          data={data}
          view={view}
          colorKey={colorKey}
          indexStep={indexStep}
          currentStep={currentStep}
          binary
        />

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
            Binary Search is a searching algorithm for finding an element's
            position in a sorted array.
          </p>
          <p>
            It is a fast search algorithm with the runtime complexity as O (log
            N) which uses the Divide and Conquer principle for its search
            algorithm.
          </p>
          <p>
            In binary search, the search key is compared first with the middle
            position element in the data collection. If the search key and the
            middle element is the same, right away if there is a match. If the
            key is less than the middle key, the item must be found in the lower
            half of the data set; if it is greater, the item must be found in
            the upper half
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
          <span className='block'>BinarySearch (Array Arr, Value key)</span>
          <span className='block'>
            // Input: Arr is the name of the array, and key is the searched
            element.
          </span>
          <span className='block'>Step 1: Left = 0</span>
          <span className='block'>Step 2: Right = Arr(n - 1) </span>
          <span className='block'>{"Step 3: While left < =right"}</span>
          <span className='block'>Step 4: Middle = (left + right )/2</span>
          <span className='block'>{"Step 5: If Arr[middle] < key then"}</span>
          <span className='block'>Step 6: Left = middle + 1</span>
          <span className='block'>{"Step 7: Else if Arr[middle] > key"}</span>
          <span className='block'>Step 8: Right = middle - 1</span>
          <span className='block'>Step 9: Else return middle</span>
        </div>
      </Tab.Panel>
    </>
  );
};

BinarySearch.getLayout = function getLayout(page) {
  const pageTitle = "Searching Algorithms";
  const options = handleNavigationSearch("binary");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

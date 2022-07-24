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
import { generateDataSteps } from "../../util/search/jump";
import { handleNavigationSearch } from "../../util/search";
import { generateChartData, classNames, waitForme } from "../../util/utility";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";
import { Tab } from "@headlessui/react";

export default function JumpSearch() {
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

  const tabItemHeading = ["Intro to Jump Search", "How it works"];

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

    const newChartData = generateChartData(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      300,
      true
    );

    console.log(newChartData, "newChartData");

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
    console.log(dataSteps, "dataSteps.....");
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
        <title>Jump Search</title>
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
            The jump search algorithm is also called a block search algorithm.
            The items in the list of arrays must be sorted before the Jump
            search algorithm can be used. In the jump search algorithm, it is
            not at all necessary to scan every element in the list as it is in
            the linear search algorithm.
          </p>
          <p>
            The algorithm checks the m element, and if it is less than the key
            element, then we move to the m + m element, where all the elements
            between m element and m + m element are skipped. This process is
            continued until m element becomes equal to or greater than the key
            element called boundary value. The value of m is given by m = √n,
            where n is the total number of elements in an array.
          </p>
          <p>
            Once the m elements attain the boundary value, a linear search is
            done to find the key-value and its position in the array. And the
            numbers of comparisons are equal to (n/m + m -1). It must be noted
            that in the Jump search algorithm, a linear search is done in a
            reverse manner, that is, from boundary value to the previous value
            of m
          </p>
        </div>
      </Tab.Panel>
    </>
  );
};

JumpSearch.getLayout = function getLayout(page) {
  const pageTitle = "Searching Algorithms";
  const options = handleNavigationSearch("jump");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

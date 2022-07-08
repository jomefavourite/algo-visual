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
import { searchingNavigationOptions } from "../../util/utility";
import {
  generateChartData,
  randomIntFromInterval,
  waitForme,
} from "../../util/utility";

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
        <Dropdown view={view} setView={setView} />

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

BinarySearch.getLayout = function getLayout(page) {
  const pageTitle = "Searching Algorithms";

  return (
    <Layout pageTitle={pageTitle} options={searchingNavigationOptions}>
      {page}
    </Layout>
  );
};

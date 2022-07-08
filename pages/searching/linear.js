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
import { generateDataSteps } from "../../util/search/linear";
import { handleNavigationSearch } from "../../util/utility";
import {
  generateChartData,
  randomIntFromInterval,
  waitForme,
} from "../../util/utility";

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
    console.log(dataSteps, "dataSteps.....");
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
        <Dropdown view={view} setView={setView} />

        <Views data={data} view={view} colorKey={colorKey} />

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

Linear.getLayout = function getLayout(page) {
  const pageTitle = "Searching Algorithms";
  const options = handleNavigationSearch("linear");

  return (
    <Layout pageTitle={pageTitle} options={options}>
      {page}
    </Layout>
  );
};

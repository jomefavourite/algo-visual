import { cloneDeep } from "lodash";
import Head from "next/head";
import { useEffect, useState } from "react";
import Bar from "../../components/Bar";
import BoxView from "../../components/BoxView";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Layout/Footer";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader";
import { generateDataSteps } from "../../util/search/linear";
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
  const [delay, setDelay] = useState(500);
  const [timeouts, setTimeouts] = useState([]);
  const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [colorSteps, setColorSteps] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [view, setView] = useState("boxView");
  const [count, setCount] = useState(10);

  useEffect(() => {
    generateRandom();
  }, []);

  useEffect(() => {
    console.log(colorSteps, "colorSteps");
  }, [inputValue]);

  // const handleInputClick = (e, inputValue) => {
  //   e.preventDefault();
  //   setCurrentStep(0);
  //   setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  //   const searchIndex = LinearSearch(data, inputValue);

  //   console.log(searchIndex);
  // };

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

    console.log(newColorSteps);

    setData(newChartData);
    setColorSteps(newColorSteps);
    setCurrentStep(0);
    setDataSteps(dataSteps);
  };

  const startSearch = async () => {
    for (let i = 0; i < dataSteps.length; i++) {
      setCurrentStep((prev) => prev + 1);
      setData(() => dataSteps[i]);
      setColorKey(() => colorSteps[i]);
      await waitForme(delay);
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
    let blankKey = new Array(count).fill(0);

    setColorKey([...blankKey]);
    setColorSteps([blankKey]);
  };

  const handleInputChange = (e) => {
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
      </div>

      <div>
        <button onClick={generateRandom}>Generate Random</button>

        <form>
          <p>Search for a Number above</p>

          <input
            type='number'
            value={inputValue}
            placeholder='12'
            className='bg-black text-white'
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
          {/* <button>Search</button> */}
        </form>
      </div>

      {/* <div>
        <h3>Pseudo Code</h3>

        <code></code>
      </div> */}

      <Footer
        start={startSearch}
        playing={playing}
        nextStep={nextStep}
        previousStep={previousStep}
        // pauser={pauser}
      />
    </>
  );
}

Linear.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
    },
    {
      value: "Linear Search",
      href: "/searching/linear",
    },
  ];

  return <Layout options={options}>{page}</Layout>;
};

// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { setArray } from "../../redux/algo.actions";
// // import { times } from "lodash";
// import Layout from "../../components/Layout/Layout";
// import { generateDataSteps } from "../../util/sort/insertionsort";

// import { generateChartData, waitForme } from "../../util/utility";
// // import SvgRect from "../../components/svg-rect/svg-rect";
// // import { randomIntFromInterval } from "../../util/utility";
// import Footer from "../../components/Layout/Footer";
// import { cloneDeep } from "lodash";
// import Bar from "../../components/Bar";
// import { handleNavigationSort } from "../../util/sort";

export default function Insertion() {
  //   const dispatch = useDispatch();
  //   const arr = useSelector((state) => state.algo.arr);

  //   const [playing, setPlaying] = useState(false);
  //   const [inputValue, setInputValue] = useState("");
  //   const [data, setData] = useState([
  //     {
  //       textValue: "26",
  //       textY: "107.04081632653062",
  //       rectWidth: "45",
  //       rectHeight: "122.04081632653062",
  //     },
  //     {
  //       textValue: "20",
  //       textY: "78.87755102040816",
  //       rectWidth: "45",
  //       rectHeight: "93.87755102040816",
  //     },
  //     {
  //       textValue: "19",
  //       textY: "74.18367346938776",
  //       rectWidth: "45",
  //       rectHeight: "89.18367346938776",
  //     },
  //     {
  //       textValue: "48",
  //       textY: "200.30612244897958",
  //       rectWidth: "45",
  //       rectHeight: "215",
  //     },
  //     {
  //       textValue: "36",
  //       textY: "153.9795918367347",
  //       rectWidth: "45",
  //       rectHeight: "168.9795918367347",
  //     },
  //     {
  //       textValue: "49",
  //       textY: "205",
  //       rectWidth: "45",
  //       rectHeight: "220",
  //     },
  //     {
  //       textValue: "50",
  //       textX: "22.5",
  //       textY: "215",
  //       textY: "92.9591836734694",
  //     },
  //     {
  //       textValue: "4",
  //       textY: "35",
  //       rectWidth: "45",
  //       rectHeight: "48.77551020408163",
  //     },
  //     {
  //       textValue: "27",
  //       textY: "111.73469387755101",
  //       rectWidth: "45",
  //       rectHeight: "126.73469387755101",
  //     },
  //     {
  //       textValue: "45",
  //       textY: "196.22448979591837",
  //       rectWidth: "45",
  //       rectHeight: "211.22448979591837",
  //     },
  //   ]);
  //   const [dataSteps, setDataSteps] = useState([]);
  //   const [currentStep, setCurrentStep] = useState(0);
  //   const [timeouts, setTimeouts] = useState([]);
  //   const [colorKey, setColorKey] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   const [colorSteps, setColorSteps] = useState([
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   ]);
  //   const [count, setCount] = useState(10);
  //   const [speedControl, setSpeedControl] = useState({
  //     speed: 50,
  //     delay: 500,
  //   });

  //   useEffect(() => {
  //     generateRandom();
  //   }, []);

  //   useEffect(() => {
  //     console.log(dataSteps, "dataSteps");
  //   }, [dataSteps]);

  //   const handleInputClick = (e, inputValue) => {
  //     e.preventDefault();
  //     // setReset(true);
  //     setCurrentStep(0);
  //     setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //     setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  //     // console.log(colorSteps, "reset handle click");

  //     // console.log(colorSteps, "colorSteps");

  //     const arrOfInputs = inputValue.split(",").map((str) => Number(str));
  //     const newChartData = generateChartData(arrOfInputs);
  //     // const cloneNewChartData = JSON.parse(JSON.stringify(newChartData));
  //     const cloneNewChartData = cloneDeep(newChartData);
  //     const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));

  //     // console.log(newChartData, "newChartData");
  //     // console.log(cloneNewChartData, "cloneNewChartData");

  //     const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
  //       cloneNewChartData,
  //       cloneColorSteps
  //     );

  //     console.log(newColorSteps, "newColorSteps");

  //     // console.log(dataSteps, "dataSteps");

  //     setData(newChartData);
  //     setColorSteps(newColorSteps);
  //     setCurrentStep(0);
  //     setDataSteps(dataSteps);
  //   };

  //   // const generateRandom = () => {
  //   //   const randomArr = Array.from({ length: randomIntFromInterval(8, 12) }, () =>
  //   //     Math.floor(Math.random() * 40)
  //   //   );
  //   //   const newChartData = generateChartData(randomArr);

  //   //   setData(newChartData);
  //   //   // setCurrentStep(0);
  //   // };

  //   const generateRandom = () => {
  //     clearTimeouts();
  //     clearColorKey();

  //     // Maximum item in the array is 50 and least is 1
  //     const randomArr = Array.from(
  //       { length: 10 },
  //       () => Math.floor(Math.random() * 49) + 1
  //     );
  //     const newChartData = generateChartData(randomArr);
  //     const cloneNewChartData = cloneDeep(newChartData);
  //     const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));
  //     // const cloneColorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  //     const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
  //       cloneNewChartData,
  //       cloneColorSteps
  //     );

  //     setData(newChartData);
  //     setColorSteps(newColorSteps);
  //     setCurrentStep(0);
  //     setDataSteps(dataSteps);
  //   };

  //   const previousStep = () => {
  //     if (currentStep === 0) return;
  //     setCurrentStep(currentStep - 1);
  //     setData(dataSteps[currentStep - 1]);
  //     setColorKey(colorSteps[currentStep - 1]);
  //   };

  //   const nextStep = () => {
  //     if (currentStep >= dataSteps.length - 1) return;
  //     setCurrentStep(currentStep + 1);
  //     setData(dataSteps[currentStep + 1]);
  //     setColorKey(colorSteps[currentStep + 1]);
  //   };

  //   const start = async () => {
  //     // let steps = dataSteps;
  //     // let colorSteps = this.state.colorSteps;

  //     clearTimeouts();

  //     let timeouts = [];
  //     let i = currentStep;
  //     console.log(i, "i");

  //     setPlaying(true);

  //     while (i < dataSteps.length - 0) {
  //       await waitForme(speedControl.delay);
  //       console.log(currentStep, "currentStep in while");
  //       setCurrentStep((prev) => prev + 1);
  //       setData(() => dataSteps[i]);
  //       setColorKey(() => colorSteps[i]);

  //       if (playing === false) await pauser();

  //       i++;
  //     }

  //     setPlaying(false);

  //     // setTimeouts([...timeouts]);
  //   };

  //   const pauser = async () => {
  //     return await new Promise((resolve) => {
  //       setPlaying(false);
  //       resolve("resolved");
  //     });
  //   };

  //   const clearTimeouts = () => {
  //     timeouts.forEach((timeout) => clearTimeout(timeout));
  //     setTimeouts([]);
  //     0;
  //   };

  //   // const reset = () => {
  //   //   setCurrentStep(0);
  //   //   setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   //   setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  //   // };

  //   const clearColorKey = () => {
  //     let count = 10;
  //     let blankKey = new Array(count).fill(0);

  //     setColorKey([...blankKey]);
  //     setColorSteps([blankKey]);
  //   };

  //   // let regex = new RegExp(/^[0-9](,[1-8])*$/);
  //   // let regex2 = new RegExp(/^[0-50]/);
  //   // const found = regex.test("2,3,4");
  //   // console.log(regex2.test("59"));

  //   // const handleInsertionSort = async () => {
  //   //   console.log("Insertion called");
  //   //   setPlaying(true);
  //   //   let res = [...data];

  //   //   const swapper = (data, i, j) => {
  //   //     const { translateX: x1, translateY: y1 } = data[i];
  //   //     const { translateX: x2, translateY: y2 } = data[j];
  //   //     data[i].translateX = x2;
  //   //     data[j].translateX = x1;
  //   //     [data[i], data[j]] = [data[j], data[i]];
  //   //   };

  //   //   for (let i = 0; i < res.length; i++) {
  //   //     let min = i;
  //   //     res[min].fillColor = "#F59E0B";
  //   //     await waitforAnim();
  //   //     setData([...res]);

  //   //     for (let j = i + 1; j < res.length; j++) {
  //   //       if (+res[min].textValue > +res[j].textValue) {
  //   //         res[min].fillColor = "rgb(173, 216, 230)";
  //   //         res[j].fillColor = "#F59E0B";
  //   //         min = j;
  //   //       }
  //   //       await waitforAnim();
  //   //       setData([...res]);
  //   //     }

  //   //     if (min !== i) swapper(res, i, min);
  //   //     await waitforAnim();
  //   //     setData([...res]);
  //   //   }

  //   //   setPlaying(false);
  //   // };

  return <>Hello World</>;
  //     <>
  //       <Head>
  //         <title>Insertion Sort</title>
  //       </Head>

  //       <div className='mt-20 min-h-[320px]'>
  //         <div className='flex h-[300px] items-end justify-center gap-3 px-3'>
  //           {data.map((item, index) => (
  //             <Bar key={index} item={item} color={colorKey[index]} />
  //           ))}
  //         </div>
  //       </div>

  //       <button onClick={generateRandom}>Generate Random</button>

  //       <form onSubmit={(e) => handleInputClick(e, inputValue)}>
  //         <input
  //           type='text'
  //           value={inputValue}
  //           placeholder='12,20,33,45,20'
  //           className='bg-black text-white'
  //           onChange={(event) => {
  //             setInputValue(event.target.value);
  //           }}
  //         />
  //         <button>Set inputs</button>
  //       </form>

  //       {/* <Footer handleSort={handleInsertionSort} playing={playing} /> */}

  //       <Footer
  //         // handleSort={handleInsertionSort}
  //         start={start}
  //         playing={playing}
  //         nextStep={nextStep}
  //         previousStep={previousStep}
  //         pauser={pauser}
  //         speedControl={speedControl}
  //         setSpeedControl={setSpeedControl}
  //         type='sorting'
  //       />
  //     </>
  //   );
}

// Insertion.getLayout = function getLayout(page) {
//   const pageTitle = "Sorting Algorithm";
//   const options = handleNavigationSort("insertion");

//   return <Layout options={options}>{page}</Layout>;
// };

// import Head from "next/head";
// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setArray } from "../../redux/algo.actions";
// import Layout from "../../components/Layout/Layout";
// import {
//   generateDataSteps,
//   sampleDataSteps,
//   waitforAnim,
// } from "../../util/sort/bubblesort";

// import { randomIntFromInterval } from "../../util/utility";
// import Footer from "../../components/Layout/Footer";
// import Dropdown from "../../components/Dropdown";
// import Bar from "../../components/Bar";
import { cloneDeep } from "lodash";
import { generateChartData } from "../../util/utility";

export const handleInputClick = (
  e,
  inputValue,
  setCurrentStep,
  setColorKey,
  setColorSteps,
  colorSteps,
  generateDataSteps,
  setData,
  setDataSteps
) => {
  e.preventDefault();
  // setReset(true);
  setCurrentStep(0);
  setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  // console.log(colorSteps, "reset handle click");

  // console.log(colorSteps, "colorSteps");

  const arrOfInputs = inputValue.split(",").map((str) => Number(str));
  const newChartData = generateChartData(arrOfInputs);
  // const cloneNewChartData = JSON.parse(JSON.stringify(newChartData));
  const cloneNewChartData = cloneDeep(newChartData);
  const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));

  // console.log(newChartData, "newChartData");
  // console.log(cloneNewChartData, "cloneNewChartData");

  const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
    cloneNewChartData,
    cloneColorSteps
  );

  console.log(newColorSteps, "newColorSteps");

  // console.log(dataSteps, "dataSteps");

  setData(newChartData);
  setColorSteps(newColorSteps);
  setCurrentStep(0);
  setDataSteps(dataSteps);
};

export const generateRandom = (
  clearTimeouts,
  clearColorKey,
  colorSteps,
  generateDataSteps,
  setData,
  setColorSteps,
  setCurrentStep,
  setDataSteps
) => {
  clearTimeouts();
  clearColorKey();

  // Maximum item in the array is 50 and least is 1
  const randomArr = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 49) + 1
  );
  const newChartData = generateChartData(randomArr);
  const cloneNewChartData = cloneDeep(newChartData);
  const cloneColorSteps = JSON.parse(JSON.stringify(colorSteps));

  const { dataSteps, colorSteps: newColorSteps } = generateDataSteps(
    cloneNewChartData,
    cloneColorSteps
  );

  setData(newChartData);
  setColorSteps(newColorSteps);
  setCurrentStep(0);
  setDataSteps(dataSteps);
};

export const previousStep = (
  currentStep,
  setCurrentStep,
  setData,
  dataSteps,
  setColorKey,
  colorSteps
) => {
  if (currentStep === 0) return;
  setCurrentStep(currentStep - 1);
  setData(dataSteps[currentStep - 1]);
  setColorKey(colorSteps[currentStep - 1]);
};

export const nextStep = (
  currentStep,
  setCurrentStep,
  setData,
  dataSteps,
  setColorKey,
  colorSteps
) => {
  if (currentStep >= dataSteps.length - 1) return;
  setCurrentStep(currentStep + 1);
  setData(dataSteps[currentStep + 1]);
  setColorKey(colorSteps[currentStep + 1]);
};

export const start = async (
  clearTimeouts,
  currentStep,
  setPlaying,
  dataSteps,
  setCurrentStep,
  setData,
  setColorKey,
  playing,
  colorSteps
) => {
  clearTimeouts();

  let timeouts = [];
  let i = currentStep;

  setPlaying(true);

  while (i < dataSteps.length - 0) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(currentStep, "currentStep in while");
    setCurrentStep((prev) => prev + 1);
    setData(() => dataSteps[i]);
    setColorKey(() => colorSteps[i]);

    if (playing === false) await pauser(setPlaying);

    i++;
  }

  setPlaying(false);

  // setTimeouts([...timeouts]);
};

export const pauser = async (setPlaying) => {
  return await new Promise((resolve) => {
    setPlaying(false);
    resolve("resolved");
  });
};

const clearTimeouts = () => {
  timeouts.forEach((timeout) => clearTimeout(timeout));
  setTimeouts([]);
  0;
};

const waitforAnim2 = function (delay = 1000, i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay * i);
  });
};

// const reset = () => {
//   setCurrentStep(0);
//   setColorKey([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//   setColorSteps([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
// };

const clearColorKey = () => {
  let blankKey = new Array(count).fill(0);

  setColorKey([...blankKey]);
  setColorSteps([blankKey]);
};

// let regex = new RegExp(/^[0-9](,[1-8])*$/);
// let regex2 = new RegExp(/^[0-50]/);
// const found = regex.test("2,3,4");
// console.log(regex2.test("59"));

const handleBubbleSort = async () => {
  console.log("clicked called");
  setPlaying(true);
  let res = [...data];

  const swapper = (data, i, j) => {
    const { translateX: x1, translateY: y1 } = data[i];
    const { translateX: x2, translateY: y2 } = data[j];
    data[i].translateX = x2;
    data[j].translateX = x1;
    [data[i], data[j]] = [data[j], data[i]];
  };

  for (let i = res.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      res[j].fillColor = "#F59E0B";
      res[j + 1].fillColor = "#F59E0B";
      setData([...res]);
      await waitforAnim();

      if (+res[j].textValue > +res[j + 1].textValue) {
        await waitforAnim();
        swapper(res, j, j + 1);
        await waitforAnim();
        setData([...res]);
      }

      res[j].fillColor = "rgb(173, 216, 230)";
      res[j + 1].fillColor = "rgb(173, 216, 230)";
    }

    res[i - 1].fillColor = "#3B82F6";
  }

  setPlaying(false);
};

export const handleNavigation = (page) => {
  return [
    {
      value: "Home",
      href: "/",
      active:
        page === "home"
          ? true
          : page === "bubble"
          ? true
          : page === "selection"
          ? true
          : page === "insertion"
          ? true
          : false,
    },
    {
      value: "Bubble Sort",
      href: "/sorting/bubble",
      active:
        page === "home"
          ? true
          : page === "bubble"
          ? true
          : page === "selection"
          ? true
          : page === "insertion"
          ? true
          : false,
    },
    {
      value: "Selection Sort",
      href: "/sorting/selection",
      active:
        page === "home"
          ? true
          : page === "bubble"
          ? true
          : page === "selection"
          ? true
          : page === "insertion"
          ? true
          : false,
    },
    {
      value: "Insertion Sort",
      href: "/sorting/insertion",
      active:
        page === "home"
          ? true
          : page === "bubble"
          ? true
          : page === "selection"
          ? true
          : page === "insertion"
          ? true
          : false,
    },
  ];
};

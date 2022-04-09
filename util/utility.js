import { find, matchesProperty } from "lodash";

export function generateChartData(arr, h = 230) {
  const res = determineTranslateX(arr, h);

  return res;
}

function determineTranslateX(arr, h) {
  let arrSorted = [...arr].sort((a, b) => a - b);
  // arr.sort((a, b) => a - b);

  let yn = [];
  let constant;
  let translateX = 0;
  for (let i = 0; i < arrSorted.length - 1; i++) {
    let max = arrSorted[arrSorted.length - (i + 1)];
    let secMax = arrSorted[arrSorted.length - (i + 2)];
    constant = h / arrSorted[arrSorted.length - 1];
    if (i === 0) {
      yn.push(constant * (max - secMax));
    } else {
      yn.push(yn[yn.length - 1] + constant * (max - secMax));
    }
  }

  const heightArr = yn.map((item) => h - item);

  let obj = [];

  for (let i = 0; i < arrSorted.length; i++) {
    obj.push({
      rectHeight:
        i === arrSorted.length - 1 ? h : heightArr[heightArr.length - (i + 1)],
      textValue: arrSorted[i],
      // transform: `translate(${i === 0 ? 0 : (translateX += 50)},${
      //   i === arrSorted.length - 1 ? 0 : yn[yn.length - (i + 1)]
      // })`,
      transform: `translate(0,${
        i === arrSorted.length - 1 ? 0 : yn[yn.length - (i + 1)]
      })`,
      textY:
        i === arrSorted.length - 1
          ? h - 20
          : heightArr[heightArr.length - (i + 1)] - 20,
      textX: "22.5",
      rectWidth: "45",
    });
  }

  let newData = [];
  for (let i = 0; i < arr.length; i++) {
    newData.push(find(obj, matchesProperty("textValue", arr[i])));
  }

  for (let i = 0; i < newData.length; i++) {
    console.log(newData[i].transform.split(",")[1]);
    newData[i] = {
      ...newData[i],
      transform: `translate(${i === 0 ? 0 : (translateX += 50)},${
        newData[i].transform.split(",")[1]
      }`,
    };
  }

  console.log(newData, "newData");

  return newData;
}

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (Number(arr[i - 1]) > Number(arr[i])) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;

        swapped = true;
      }
    }
  } while (swapped === true);

  return arr;
}

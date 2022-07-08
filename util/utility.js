import { find, matchesProperty } from "lodash";

export function generateChartData(arr, h = 300, sorted) {
  return determineChartData(arr, h, sorted);
}

// This function determines the SVG data for the chart,
// based on the data provided.
function determineChartData(arr, h, sorted) {
  let arrSorted = [...arr].sort((a, b) => a - b);

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

  let sortedDataProperties = [];

  for (let i = 0; i < arrSorted.length; i++) {
    sortedDataProperties.push({
      rectHeight:
        i === arrSorted.length - 1 ? h : heightArr[heightArr.length - (i + 1)],
      textValue: arrSorted[i],
      translateX: "0",
      translateY: `${i === arrSorted.length - 1 ? 0 : yn[yn.length - (i + 1)]}`,
      textY:
        i === arrSorted.length - 1
          ? h - 20
          : heightArr[heightArr.length - (i + 1)] - 20,
      textX: "22.5",
      rectWidth: "45",
      fillColor: "rgb(173, 216, 230)",
    });
  }

  let unsortedNewData = [];

  for (let i = 0; i < arr.length; i++) {
    unsortedNewData.push(
      find(sortedDataProperties, matchesProperty("textValue", arr[i]))
    );
  }

  for (let i = 0; i < unsortedNewData.length; i++) {
    unsortedNewData[i] = {
      ...unsortedNewData[i],
      translateX: `${i === 0 ? 0 : (translateX += 50)}`,
      translateY: `${unsortedNewData[i].translateY}`,
    };
  }

  if (sorted) {
    return sortedDataProperties;
  }

  return unsortedNewData;
}

// To generate random data with a range of numbers
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const swap = (data, i, j) => {
  const { translateX: x1, translateY: y1 } = data[i];
  const { translateX: x2, translateY: y2 } = data[j];

  data[i].translateX = x2;
  data[j].translateX = x1;

  [data[i], data[j]] = [data[j], data[i]];

  // return data;
};

export const waitForme = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

export const handleNavigationSearch = (page) => {
  return [
    {
      value: "Home",
      href: "/",
      active: page === "home" ? true : false,
    },
    {
      value: "Linear Search",
      href: "/searching/linear",
      active: page === "linear" ? true : false,
    },
    {
      value: "Binary Search",
      href: "/searching/binary",
      active: page === "binary" ? true : false,
    },
    {
      value: "Jump Search",
      href: "/searching/jump",
      active: page === "jump" ? true : false,
    },
  ];
};

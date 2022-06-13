import {
  setCurrentBubbleItems,
  setCurrentSortedItems,
  setCurrentSwapItems,
  setRunning,
  setArray,
} from "../redux/algo.actions";

var red_color = "#EF4444"; // picked 2
var blue_color = "#3B82F6"; // default color
var yellow_color = "#F59E0B"; // selected
var purple_color = "#8B5CF6";

export function generateDataSteps(data, colorSteps) {
  const cloneData = JSON.parse(JSON.stringify(data));
  const cloneData2 = JSON.parse(JSON.stringify(data));

  let dataSteps = [];
  dataSteps.push(cloneData2);

  for (let i = 0; i < cloneData.length - 1; i++) {
    for (let j = 0; j < cloneData.length - i - 1; j++) {
      if (+cloneData[j].textValue > +cloneData[j + 1].textValue) {
        swap(cloneData, j, j + 1);
      }
      dataSteps.push([...cloneData]);
    }
    dataSteps.push([...cloneData]);
  }
  const newColorSteps = generateColorSteps(data);
  colorSteps = newColorSteps;

  return { dataSteps, colorSteps };
}

function generateColorSteps(data) {
  const colorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const colorKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      colorKey[j] = 1;
      colorKey[j + 1] = 1;
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }
    colorKey[data.length - 1 - i] = 2;
    colorSteps.push([...colorKey]);
  }
  colorSteps[colorSteps.length - 1] = new Array(data.length).fill(2);
  return colorSteps;
}

const swap = (data, i, j) => {
  const { translateX: x1, translateY: y1 } = data[i];
  const { translateX: x2, translateY: y2 } = data[j];

  data[i].translateX = x2;
  data[j].translateX = x1;

  [data[i], data[j]] = [data[j], data[i]];

  // return data;
};

function swapProperties(sourceObj, sourceKey, targetObj, targetKey) {
  var temp = sourceObj[sourceKey];
  sourceObj[sourceKey] = targetObj[targetKey];
  targetObj[targetKey] = temp;
}

export const waitforAnim = function (milisec = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

export const sampleDataSteps = [
  [
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 172.5,
      rectWidth: "45",
      textValue: 3,
      textX: "22.5",
      textY: 152.5,
      translateX: "0",
      translateY: "57.5",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 230,
      rectWidth: "45",
      textValue: 4,
      textX: "22.5",
      textY: 210,
      translateX: "50",
      translateY: "0",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 115,
      rectWidth: "45",
      textValue: 2,
      textX: "22.5",
      textY: 95,
      translateX: "100",
      translateY: "115",
    },
  ],
  [
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 172.5,
      rectWidth: "45",
      textValue: 3,
      textX: "22.5",
      textY: 152.5,
      translateX: "0",
      translateY: "57.5",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 115,
      rectWidth: "45",
      textValue: 2,
      textX: "22.5",
      textY: 95,
      translateX: "100",
      translateY: "115",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 230,
      rectWidth: "45",
      textValue: 4,
      textX: "22.5",
      textY: 210,
      translateX: "50",
      translateY: "0",
    },
  ],
  [
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 172.5,
      rectWidth: "45",
      textValue: 3,
      textX: "22.5",
      textY: 152.5,
      translateX: "0",
      translateY: "57.5",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 115,
      rectWidth: "45",
      textValue: 2,
      textX: "22.5",
      textY: 95,
      translateX: "50",
      translateY: "115",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 230,
      rectWidth: "45",
      textValue: 4,
      textX: "22.5",
      textY: 210,
      translateX: "100",
      translateY: "0",
    },
  ],
  [
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 115,
      rectWidth: "45",
      textValue: 2,
      textX: "22.5",
      textY: 95,
      translateX: "0",
      translateY: "115",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 172.5,
      rectWidth: "45",
      textValue: 3,
      textX: "22.5",
      textY: 152.5,
      translateX: "50",
      translateY: "57.5",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 230,
      rectWidth: "45",
      textValue: 4,
      textX: "22.5",
      textY: 210,
      translateX: "100",
      translateY: "0",
    },
  ],
  [
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 115,
      rectWidth: "45",
      textValue: 2,
      textX: "22.5",
      textY: 95,
      translateX: "0",
      translateY: "115",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 172.5,
      rectWidth: "45",
      textValue: 3,
      textX: "22.5",
      textY: 152.5,
      translateX: "50",
      translateY: "57.5",
    },
    {
      fillColor: "rgb(173, 216, 230)",
      rectHeight: 230,
      rectWidth: "45",
      textValue: 4,
      textX: "22.5",
      textY: 210,
      translateX: "100",
      translateY: "0",
    },
  ],
];

export const bubbleSort = async (arr) => {
  let results = arr;
  // let arr  = [...results]
  // let colorKey = colorSteps[colorSteps.length - 1];

  const swapper = (data, i, j) => {
    const { translateX: x1, translateY: y1 } = data[i];
    const { translateX: x2, translateY: y2 } = data[j];

    const [tempX, tempY] = [x1, y1];

    data[i].translateX = x2;

    // data[i].translateY = y2;

    data[j].translateX = tempX;

    // data[j].translateY = tempY;

    [data[i], data[j]] = [data[j], data[i]];

    // return data;
  };

  for (let i = results.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(results[j], j, "sorting");

      // results[j].isGettingSorted = true;

      if (+results[j].textValue > +results[j + 1].textValue) {
        console.log("start waiting");
        await waitforAnim();
        console.log("finishedt waiting");
        swapper(results, j, j + 1);
        console.log("start waiting after swap");
        await waitforAnim();
        console.log("finished waiting after swap");
      }
    }

    results[j].isGettingSorted = false;

    results[j].isSorted = true;
  }

  return results;
};

function bubbleSort2(arr, dispatch, speed) {
  const swapper = (data, i, j) => {
    const { translateX: x1, translateY: y1 } = data[i];

    const { translateX: x2, translateY: y2 } = data[j];

    const [tempX] = [x1];
    // const [tempX,tempY] = [x1,y1];

    data[i].translateX = x2;

    // data[i].translateY = y2;

    data[j].translateX = tempX;

    // data[j].translateY = tempY;

    [data[i], data[j]] = [data[j], data[i]];

    // return data;
  };

  let array = arr.slice(0);
  let toDispatch = [];

  for (let h = array.length; h > 0; h--) {
    for (let i = 0; i < h - 1; i++) {
      toDispatch.push([i, i + 1]);

      console.log(
        toDispatch,
        `[toDispatch arr in bubbleSort after ${i}th inner loop`
      );

      if (+array[i].textValue > +array[i + 1].textValue) {
        toDispatch.push([i, i + 1, true]);

        console.log(
          toDispatch,
          `[toDispatch arr in bubbleSort after ${i}th inner loop and in  conditional b4 swap`
        );

        swapper(array, i, i + 1);

        console.log(
          toDispatch,
          `[toDispatch arr in bubbleSort after ${i}th inner loop and in  conditional after swap`
        );

        toDispatch.push(array.slice(0));

        toDispatch.push([]);
      }
    }

    toDispatch.push([true, h - 1]);

    console.log(toDispatch, "[todispatch new bubbleSort]");
  }

  handleDispatch(toDispatch, dispatch, array, speed);

  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentBubbleItems(array.map((num, index) => index)));

    setTimeout(() => {
      dispatch(setCurrentBubbleItems([]));

      dispatch(setCurrentSortedItems(array.map((num, index) => index)));

      dispatch(setRunning(false));
    }, 900);
    return;
  }

  let dispatchFunction =
    toDispatch[0].length > 3
      ? setArray
      : toDispatch[0].length === 3 || toDispatch[0].length === 0
      ? setCurrentSwapItems
      : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
      ? setCurrentSortedItems
      : setCurrentBubbleItems;

  dispatch(dispatchFunction(toDispatch.shift()));

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default bubbleSort2;

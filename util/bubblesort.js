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

export function generateDataSteps(data) {
  const cloneData = JSON.parse(JSON.stringify(data));
  console.log(data, "initData - cloneNewChartData");
  let dataSteps = [];

  for (let i = 0; i < cloneData.length - 1; i++) {
    for (let j = 0; j < cloneData.length - i - 1; j++) {
      if (+cloneData[j].textValue > +cloneData[j + 1].textValue) {
        swap(cloneData, j, j + 1);
      }
      dataSteps.push([...cloneData]);
      console.log(dataSteps, "dataSteps--");
    }
    dataSteps.push([...cloneData]);
  }
  return dataSteps;
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
      rectHeight: 172.5,
      textValue: 3,
      translateX: "0",
      translateY: "57.5",
      textY: 152.5,
    },
    {
      rectHeight: 230,
      textValue: 4,
      translateX: "50",
      translateY: "0",
      textY: 210,
    },
    {
      rectHeight: 115,
      textValue: 2,
      translateX: "100",
      translateY: "115",
      textY: 95,
    },
  ],
  [
    {
      rectHeight: 172.5,
      textValue: 3,
      translateX: "0",
      translateY: "57.5",
      textY: 152.5,
    },
    {
      rectHeight: 115,
      textValue: 2,
      translateX: "100",
      translateY: "115",
      textY: 95,
    },
    {
      rectHeight: 230,
      textValue: 4,
      translateX: "50",
      translateY: "0",
      textY: 210,
    },
  ],
  [
    {
      rectHeight: 172.5,
      textValue: 3,
      translateX: "0",
      translateY: "57.5",
      textY: 152.5,
    },
    {
      rectHeight: 115,
      textValue: 2,
      translateX: "50",
      translateY: "115",
      textY: 95,
    },
    {
      rectHeight: 230,
      textValue: 4,
      translateX: "100",
      translateY: "0",
      textY: 210,
    },
  ],
  [
    {
      rectHeight: 115,
      textValue: 2,
      translateX: "50",
      translateY: "115",
      textY: 95,
    },
    {
      rectHeight: 172.5,
      textValue: 3,
      translateX: "0",
      translateY: "57.5",
      textY: 152.5,
    },
    {
      rectHeight: 230,
      textValue: 4,
      translateX: "50",
      translateY: "0",
      textY: 210,
    },
  ],
  [
    {
      rectHeight: 115,
      textValue: 2,
      translateX: "100",
      translateY: "115",
      textY: 95,
    },
    {
      rectHeight: 172.5,
      textValue: 3,
      translateX: "0",
      translateY: "57.5",
      textY: 152.5,
    },
    {
      rectHeight: 230,
      textValue: 4,
      translateX: "50",
      translateY: "0",
      textY: 210,
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

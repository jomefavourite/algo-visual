import { swap } from "../utility";

export function generateDataSteps(data, colorSteps) {
  const cloneData = JSON.parse(JSON.stringify(data));
  const newColorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const colorKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let dataSteps = [];
  dataSteps.push(JSON.parse(JSON.stringify(data)));

  for (let i = 0; i < cloneData.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < cloneData.length; j++) {
      if (cloneData[j].textValue < cloneData[min_index].textValue) {
        min_index = j;
      }
      colorKey[min_index] = 1;
      colorKey[j] = 1;
      dataSteps.push([...cloneData]);
      newColorSteps.push(colorKey.slice());
      colorKey[min_index] = 0;
      colorKey[j] = 0;
    }
    swap(cloneData, min_index, i);
    colorKey[i] = 2;
    dataSteps.push(cloneData.slice());
    newColorSteps.push(colorKey.slice());
  }
  newColorSteps[newColorSteps.length - 1] = new Array(data.length).fill(2);
  colorSteps = newColorSteps;

  return { dataSteps, colorSteps };
}

// function generateColorSteps(data) {
//   const colorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//   const colorKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//   for (let i = 0; i < data.length - 1; i++) {
//     let min_index = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j].textValue < data[min_index].textValue) {
//         min_index = j;
//       }
//       colorKey[min_index] = 1;
//       colorKey[j] = 1;
//       colorSteps.push(colorKey.slice());
//       colorKey[min_index] = 0;
//       colorKey[j] = 0;
//     }
//     colorKey[i] = 2;
//     colorSteps.push(colorKey.slice());
//   }

//   colorSteps[colorSteps.length - 1] = new Array(data.length).fill(2);
//   return colorSteps;
// }

import { swap } from "../utility";

export function generateDataSteps(data, colorSteps) {
  const cloneData = JSON.parse(JSON.stringify(data));
  const newColorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const colorKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let dataSteps = [];
  dataSteps.push(JSON.parse(JSON.stringify(data)));

  let i, j, key;
  for (i = 1; i < cloneData.length; i++) {
    key = cloneData[i].textValue;
    j = i - 1;

    while (j >= 0 && cloneData[j].textValue > key) {
      cloneData[j + 1].textValue = cloneData[j].textValue;
      dataSteps.push(cloneData.slice());
      colorKey[i] = 3;
      if (i === j + 1) {
        colorKey[j + 1] = 3;
      } else {
        colorKey[j + 1] = 1;
      }
      colorKey[j] = 1;
      newColorSteps.push(colorKey.slice());
      colorKey[j + 1] = 0;
      colorKey[i] = 0;
      colorKey[j] = 0;
      j = j - 1;
    }
    cloneData[j + 1].textValue = key;
    dataSteps.push(cloneData.slice());
    newColorSteps.push(colorKey.slice());
  }
  newColorSteps[newColorSteps.length - 1] = new Array(cloneData.length).fill(2);
  // const newColorSteps = generateColorSteps(data);
  colorSteps = newColorSteps;

  return { dataSteps, colorSteps };
}

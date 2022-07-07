export function generateDataSteps(data, key, colorSteps) {
  const newColorSteps = [new Array(data.length).fill(0)];
  let left = 0;
  let right = data.length - 1;

  let dataSteps = [[...data]];

  // binary search algorithm
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    let colorKey = new Array(data.length).fill(0);
    colorKey[mid] = 1;
    newColorSteps.push([...colorKey]);
    dataSteps.push([...data]);

    if (Number(data[mid].textValue) === key) {
      colorKey[mid] = 2;
      newColorSteps.push([...colorKey]);
      dataSteps.push([...data]);

      colorSteps = newColorSteps;

      return { dataSteps, colorSteps };
    } else if (Number(data[mid].textValue) < key) {
      left = mid + 1;
      colorKey[mid] = 1;
      newColorSteps.push([...colorKey]);
      dataSteps.push([...data]);
    } else {
      right = mid - 1;
      colorKey[mid] = 1;
      newColorSteps.push([...colorKey]);
      dataSteps.push([...data]);
    }
  }

  // color 3 is when the key isn't found
  let colorKey = new Array(data.length).fill(3);
  newColorSteps.push([...colorKey]);
  dataSteps.push([...data]);

  // newColorSteps
  if (key === 0) {
    colorSteps = [new Array(data.length).fill(0)];
  } else {
    colorSteps = newColorSteps;
  }

  return { dataSteps, colorSteps };
}

generateDataSteps(
  [
    { textValue: 1 },
    { textValue: 2 },
    { textValue: 3 },
    { textValue: 4 },
    { textValue: 5 },
    { textValue: 6 },
  ],
  1
);

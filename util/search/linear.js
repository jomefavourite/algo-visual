export function generateDataSteps(data, key, colorSteps) {
  const newColorSteps = [new Array(data.length).fill(0)];

  let dataSteps = [[...data]];

  for (let i = 0; i < data.length; i++) {
    let colorKey = new Array(data.length).fill(0);
    colorKey[i] = 1;
    newColorSteps.push(colorKey.slice());
    dataSteps.push([...data]);

    if (Number(data[i].textValue) === key) {
      colorKey[i] = 2;
      newColorSteps.push(colorKey);
      dataSteps.push([...data]);
      colorSteps = newColorSteps;

      return { dataSteps, colorSteps };
    }
  }

  // color 3 is when the key isn't found
  let colorKey = new Array(data.length).fill(3);
  newColorSteps.push(colorKey.slice());
  dataSteps.push([...data]);

  if (key === 0) {
    colorSteps = [new Array(data.length).fill(0)];
  } else {
    colorSteps = newColorSteps;
  }

  return { dataSteps, colorSteps };
}

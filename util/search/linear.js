export function generateChartData(arr) {
  let translateX = 0;
  let textX = 25;
  let res = arr.map((item, index) => {
    return {
      textValue: item,
      translateX: index === 0 ? 0 : (translateX += 50),
      translateY: "100",
      rectWidth: "50",
      rectHeight: "50",
      textX: (textX += 50),
    };
  });

  return res;
}

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

  colorSteps = newColorSteps;

  return { dataSteps, colorSteps };
}

export function generateDataSteps(data, key, colorSteps) {
  // Jump Search Algorithm
  const newColorSteps = [new Array(data.length).fill(0)];
  let colorKey = new Array(data.length).fill(0);
  let dataSteps = [[...data]];

  let block = Math.floor(Math.sqrt(data.length));
  let prev = 0;
  let presentInd = prev;

  // Finding the block where element is
  // present (if it is present)
  while (data[Math.min(block, data.length) - 1]?.textValue < key) {
    presentInd = Math.min(block, data.length) - 1;
    prev = block;

    colorKey[presentInd] = 1;
    newColorSteps.push(colorKey.slice());
    dataSteps.push([...data]);
    colorKey[presentInd] = 0;

    block += Math.floor(Math.sqrt(data.length));

    // If element is not found
    if (prev >= data.length) {
      colorKey = new Array(data.length).fill(3);
      newColorSteps.push(colorKey.slice());
      dataSteps.push([...data]);

      colorSteps = newColorSteps;
      return { dataSteps, colorSteps };
    }
  }

  // Doing a linear search for key in block
  // beginning with prev.
  while (data[prev]?.textValue < key) {
    presentInd = prev;
    prev++;

    colorKey[presentInd] = 1;
    newColorSteps.push(colorKey.slice());
    dataSteps.push([...data]);
    colorKey[presentInd] = 0;

    // If we reached next block or end of
    // array, element is not present.
    if (prev == Math.min(block, data.length)) {
      colorKey = new Array(data.length).fill(3);
      newColorSteps.push(colorKey.slice());
      dataSteps.push([...data]);

      colorSteps = newColorSteps;
      return { dataSteps, colorSteps };
    }
  }
  // If element is found
  if (data[prev]?.textValue === key) {
    colorKey[prev] = 2;
    newColorSteps.push(colorKey.slice());
    dataSteps.push([...data]);

    colorSteps = newColorSteps;

    return { dataSteps, colorSteps };
  }

  // color 3 is when the key isn't found
  colorKey = new Array(data.length).fill(3);
  newColorSteps.push(colorKey.slice());
  dataSteps.push([...data]);

  if (key === 0) {
    colorSteps = [new Array(data.length).fill(0)];
  } else {
    colorSteps = newColorSteps;
  }

  return { dataSteps, colorSteps };
}

// generateDataSteps(
//   [
//     { textValue: 1 },
//     { textValue: 2 },
//     { textValue: 3 },
//     { textValue: 4 },
//     { textValue: 5 },
//     { textValue: 6 },
//     { textValue: 7 },
//     { textValue: 8 },
//     { textValue: 9 },
//     { textValue: 10 },
//   ],
//   11
// );

function jumpSearch(data, key) {
  // Finding block size to be jumped
  let block = Math.floor(Math.sqrt(data.length));

  block;

  // Finding the block where element is
  // present (if it is present)
  let prev = 0;
  let presentInd = prev;
  while (data[Math.min(block, data.length) - 1] < key) {
    presentInd = Math.min(block, data.length) - 1;
    prev = block;
    prev;
    presentInd;

    block += Math.floor(Math.sqrt(data.length));
    if (prev >= data.length) return -1;
  }

  // Doing a linear search for key in block
  // beginning with prev.
  while (data[prev] < key) {
    prev++;

    // If we reached next block or end of
    // array, element is not present.
    if (prev == Math.min(block, data.length)) return -1;
  }
  // If element is found
  if (data[prev] == key) {
    prev;
    return prev;
  }

  return -1;
}

// jumpSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);

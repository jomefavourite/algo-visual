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

export function LinearSearch(arr, search_Element) {
  let left = 0;
  let length = arr.length;
  let right = length - 1;
  let position = -1;

  let circle = document.getElementById("linear-circle");

  console.log(circle.getAttribute("transform"));

  // Run loop from 0 to right
  for (left = 0; left <= right; ) {
    circle.style.transform = `translate(${arr[left].translateX}, 105)`;

    // If search_element is found
    // with left variable
    if (arr[left].textValue == search_Element) {
      position = left;
      return position;
    }

    // If search_element is found
    // with right variable
    if (arr[right].textValue == search_Element) {
      position = right;
      return position;
    }

    left++;
    right--;
  }

  // If element not found
  if (position == -1) return position;
}

// export const generateDataSteps = (data, steps, key, colorSteps) => {
//   const cloneData = JSON.parse(JSON.stringify(data));
//   const newColorSteps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//   // const colorKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//   let dataSteps = [];
//   dataSteps.push(JSON.parse(JSON.stringify(data)));

//   for (let i = 0; i < array.length; i++) {
//     let colorKey = new Array(array.length).fill(0);
//     colorKey[i] = 1;
//     newColorSteps.push(colorKey.slice());
//     steps.push(array.slice());
//     if (array[i] === key) {
//       colorKey[i] = 2;
//       newColorSteps.push(colorKey);
//       steps.push(array.slice());
//       return;
//     }
//   }

//   let colorKey = new Array(array.length).fill(3);
//   newColorSteps.push(colorKey.slice());
//   steps.push(array.slice());

//   colorSteps = newColorSteps;

//   return { dataSteps, colorSteps };
// };

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

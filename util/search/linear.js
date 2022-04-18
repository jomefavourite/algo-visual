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

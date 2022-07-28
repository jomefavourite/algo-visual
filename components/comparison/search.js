const logarithmics = [
  // 10, 15, 20, 30, 40, 60, 80, 100, 150, 200,
  // 300, 400, 600, 800, 1000, 1500,
  2000, 3000, 4000, 6000, 8000,
];

function binary() {
  const nums = new Set();
  while (nums.size !== 15) {
    nums.add(Math.floor(Math.random() * 100) + 1);
  }

  let len = array.length,
    swapped;
  do {
    this.incrementOpCounter();
    swapped = false;
    for (let i = 0; i < len; i++) {
      this.incrementOpCounter();
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
}

// binary();

function jumpSearch(arrayToSearch, valueToSearch) {
  const nums = new Set();
  while (nums.size !== 10) {
    nums.add(Math.floor(Math.random() * 100) + 1);
  }

  let sorted = [...nums].sort(function (a, b) {
    return a - b;
  });

  let key = sorted[sorted.length - 1];

  let operationCount = 0;

  let n = sorted.length;

  // Finding block size to be jumped
  let step = Math.sqrt(n);

  // Finding the block where element is
  // present (if it is present)
  let prev = 0;
  while (sorted[Math.min(step, n) - 1] < key) {
    prev = step;
    step += Math.sqrt(n);
    operationCount++;
    if (prev >= n) return -1;
  }

  // Doing a linear search for key in block
  // beginning with prev.
  while (sorted[prev] < key) {
    operationCount++;
    prev++;
    operationCount;

    // If we reached next block or end of
    // array, element is not present.
    if (prev == Math.min(step, n)) return -1;
  }
  // If element is found
  if (sorted[prev] == key) {
    operationCount++;
    operationCount;
    return prev;
  }

  return -1;
}

// jumpSearch();

// [
//   ["Binary Search", "Binary Search", "Search", 10, 10, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 15, 15, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 20, 20, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 30, 30, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 40, 40, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 60, 60, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 80, 80, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 100, 19, 1, 10, 10],
//   ["Binary Search", "Binary Search", "Search", 150, 10, 1, 10, 10],
// ]

// bubbleSort function
function bubbleSort() {
  let arr = [1, 3, 5, 4, 10, 6, 7, 8, 9, 2];

  let operationCount = 0;

  for (var i = 0; i < arr.length; i++) {
    // increment operation count by 1
    operationCount++;
    for (var j = 0; j < arr.length - i - 1; j++) {
      // increment operation count by 1
      operationCount++;

      if (arr[j] > arr[j + 1]) {
        operationCount++;

        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort();

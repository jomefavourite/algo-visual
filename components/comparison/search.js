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

  let sorted = [...nums].sort(function (a, b) {
    return a - b;
  });

  sorted;

  let key = sorted[sorted.length - 1];
  key;
  let start = 0,
    end = sorted.length - 1;

  let operationCount = 0;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);
    operationCount++;

    // If element is present at mid, return True
    if (sorted[mid] === key) {
      operationCount++;
      return true;
    }
    // Else look in left or right half accordingly
    else if (sorted[mid] < key) {
      operationCount++;
      operationCount;
      start = mid + 1;
    } else {
      end = mid - 1;
      operationCount++;
      operationCount;
    }
  }

  operationCount++;

  return false;
}

// binary();

function jumpSearch(arrayToSearch, valueToSearch) {
  const nums = new Set();
  while (nums.size !== 200) {
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

jumpSearch();

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

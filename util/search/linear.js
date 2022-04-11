export function LinearSearch(arr, search_Element) {
  let left = 0;
  let length = arr.length;
  let right = length - 1;
  let position = -1;

  // Run loop from 0 to right
  for (left = 0; left <= right; ) {
    // If search_element is found
    // with left variable
    if (arr[left] == search_Element) {
      position = left;
      return position;
    }

    // If search_element is found
    // with right variable
    if (arr[right] == search_Element) {
      position = right;
      return position;
    }

    left++;
    right--;
  }

  // If element not found
  if (position == -1) return position;
}

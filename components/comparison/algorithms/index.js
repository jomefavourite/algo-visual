import BubbleSort from "./bubble-sort";
// import CountingSort from "./counting-sort";
// import HeapSort from "./heap-sort";
import InsertionSort from "./insertion-sort";
// import MergeSort from "./merge-sort";
// import QuickSort from "./quick-sort";
import SelectionSort from "./selection-sort";
// import TimSort from "./tim-sort";

export class Algorithms {
  static bubbleSort = new BubbleSort();
  // static countingSort = new CountingSort();
  // static heapSort = new HeapSort();
  static insertionSort = new InsertionSort();
  // static mergeSort = new MergeSort();
  // static quickSort = new QuickSort();
  static selectionSort = new SelectionSort();
  // static timSort = new TimSort();
  static all = [
    Algorithms.bubbleSort,
    // Algorithms.countingSort,
    // Algorithms.heapSort,
    Algorithms.insertionSort,
    // Algorithms.mergeSort,
    // Algorithms.quickSort,
    Algorithms.selectionSort,
    // Algorithms.timSort,
  ];
}

export default Algorithms;

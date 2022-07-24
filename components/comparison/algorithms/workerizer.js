/* eslint-disable import/no-webpack-loader-syntax */
import { transfer } from "comlink";
import BubbleSortWorker from "comlink-loader!./bubble-sort";
// import CountingSortWorker from "comlink-loader!./counting-sort";
// import HeapSortWorker from "comlink-loader!./heap-sort";
import InsertionSortWorker from "comlink-loader!./insertion-sort";
// import MergeSortWorker from "comlink-loader!./merge-sort";
// import QuickSortWorker from "comlink-loader!./quick-sort";
import SelectionSortWorker from "comlink-loader!./selection-sort";
// import TimSortWorker from "comlink-loader!./tim-sort";
import BubbleSort from "./bubble-sort";
// import CountingSort from "./counting-sort";
// import HeapSort from "./heap-sort";
import InsertionSort from "./insertion-sort";
// import MergeSort from "./merge-sort";
// import QuickSort from "./quick-sort";
import SelectionSort from "./selection-sort";
// import TimSort from "./tim-sort";

const memoize = (factory) => {
  let instance;
  return () => {
    if (!instance) {
      instance = factory();
    }
    return instance;
  };
};

const workerized = new Map([
  [BubbleSort, memoize(() => new BubbleSortWorker())],
  // [CountingSort, memoize(() => new CountingSortWorker())],
  // [HeapSort, memoize(() => new HeapSortWorker())],
  [InsertionSort, memoize(() => new InsertionSortWorker())],
  // [MergeSort, memoize(() => new MergeSortWorker())],
  // [QuickSort, memoize(() => new QuickSortWorker())],
  [SelectionSort, memoize(() => new SelectionSortWorker())],
  // [TimSort, memoize(() => new TimSortWorker())],
]);

export default function workerizeExecuteAndCount(algorithm) {
  const key = algorithm.constructor;
  if (workerized.has(key)) {
    const worker = workerized.get(key)();
    return async (array) => {
      // eslint-disable-next-line new-cap
      const workerAlgorithm = await new worker.default();
      const transferable = Float32Array.from(array);
      return workerAlgorithm.executeAndCount(
        transfer(transferable, [transferable.buffer])
      );
    };
  }
  return algorithm.executeAndCount.bind(algorithm);
}

import React from "react";
import ComplexityChart from "../../components/comparison/ComplexityChart";
import ComplexitySeries from "../../components/comparison/ComplexitySeries";
import Navigation from "../../components/Layout/Navigation";
import AnalysisSeries from "../../components/comparison/AnalysisSeries";
import DataSets from "../../components/comparison/DataSets";
import Algorithms from "../../components/comparison/algorithms/index";
import dynamic from "next/dynamic";

const DynamicComplexityChart = dynamic(
  () => import("../../components/comparison/ComplexityChart"),
  {
    ssr: false,
  }
);

const DynamicAnalysisSeries = dynamic(
  () => import("../../components/comparison/AnalysisSeries"),
  {
    ssr: false,
  }
);

const DynamicComplexitySeries = dynamic(
  () => import("../../components/comparison/ComplexitySeries"),
  {
    ssr: false,
  }
);

function Comparison() {
  return (
    <>
      <Navigation
        comparison
        comparisonTitle={"Comparison of Sorting Algorithms Complexity"}
      />

      <main className='container'>
        <div>
          <input type='number' />
          <button className=''>Generate Random</button>
        </div>

        <DynamicComplexityChart title='Time complexity of sorting algorithms on a sorted list of numbers'>
          <DynamicComplexitySeries />
          <DynamicAnalysisSeries
            id='bubble-sort-sorted'
            algorithms={[
              Algorithms.bubbleSort,
              Algorithms.selectionSort,
              Algorithms.insertionSort,
            ]}
            dataSets={[DataSets.sorted]}
          />
        </DynamicComplexityChart>
      </main>
    </>
  );
}

export default Comparison;

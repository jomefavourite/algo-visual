import React from "react";
// import ComplexityChart from "../../components/comparison/ComplexityChart";
// import ComplexitySeries from "../../components/comparison/ComplexitySeries";
import Navigation from "../../components/Layout/Navigation";
// import AnalysisSeries from "../../components/comparison/AnalysisSeries";
import DataSets from "../../components/comparison/DataSets";
import Algorithms from "../../components/comparison/algorithms/index";
import dynamic from "next/dynamic";
import ComplexityTable from "../../components/comparison/ComplexityTable";
import Head from "next/head";

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
      <Head>
        <title>Comparison of Sorting Algorithms</title>
      </Head>
      <Navigation
        comparison
        comparisonTitle={"Comparison of Sorting Algorithms Complexity"}
      />

      <main className='container'>
        <p>
          The table below shows all the sorting algorithms that will be analyzed
          and their expected best, average and worst case time complexities
        </p>
        <ComplexityTable />

        <DynamicComplexityChart title='Time complexity of sorting algorithms on a random list of numbers'>
          <DynamicComplexitySeries />
          <DynamicAnalysisSeries
            id='all-algorithms-random'
            algorithms={[
              Algorithms.bubbleSort,
              Algorithms.selectionSort,
              Algorithms.insertionSort,
            ]}
            dataSets={[DataSets.random]}
          />
        </DynamicComplexityChart>

        <DynamicComplexityChart title='Time complexity of sorting algorithms on a sorted list of numbers'>
          <DynamicComplexitySeries />
          <DynamicAnalysisSeries
            id='all-algorithms-sorted'
            algorithms={[
              Algorithms.bubbleSort,
              Algorithms.selectionSort,
              Algorithms.insertionSort,
            ]}
            dataSets={[DataSets.sorted]}
          />
        </DynamicComplexityChart>

        <DynamicComplexityChart title='Time complexity of sorting algorithms on a reversed list of numbers'>
          <DynamicComplexitySeries />
          <DynamicAnalysisSeries
            id='all-algorithms-reversed'
            algorithms={[
              Algorithms.bubbleSort,
              Algorithms.selectionSort,
              Algorithms.insertionSort,
            ]}
            // dataSets={[DataSets.sorted]}
          />
        </DynamicComplexityChart>
      </main>
    </>
  );
}

export default Comparison;

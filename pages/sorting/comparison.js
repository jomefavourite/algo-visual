import React from "react";
import ComplexityChart from "../../components/comparison/ComplexityChart";
import ComplexitySeries from "../../components/comparison/ComplexitySeries";
import Navigation from "../../components/Layout/Navigation";

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

        <ComplexityChart>
          <ComplexitySeries />
        </ComplexityChart>
      </main>
    </>
  );
}

export default Comparison;

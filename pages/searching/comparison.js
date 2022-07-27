import dynamic from "next/dynamic";
import Head from "next/head";
import Navigation from "../../components/Layout/Navigation";

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

export default function Comparison() {
  return (
    <>
      <Head>
        <title>Comparison of Searching Algorithms</title>
      </Head>
      <Navigation
        comparison
        comparisonTitle={"Comparison of Searching Algorithms Complexity"}
      />

      <main className='container'>
        <p>
          The table below shows all the sorting algorithms that will be analyzed
          and their expected best, average and worst case time complexities
        </p>

        <ComplexityTable />

        <DynamicComplexityChart>
          <DynamicComplexitySeries />
          <DynamicAnalysisSeries id='all-search-worst' />
        </DynamicComplexityChart>
      </main>
    </>
  );
}

const ComplexityTable = () => {
  return (
    <>
      <table role='table' className='table-normal table w-full'>
        <thead>
          <tr>
            <th className='text-sm'>Name</th>
            <th className='text-sm'>Best</th>
            <th className='text-sm'>Average</th>
            <th className='text-sm'>Worst</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linear Search</td>
            <td>
              <code>O(1)</code>
            </td>
            <td>
              <code>O(N)</code>
            </td>
            <td>
              <code>O(N)</code>
            </td>
          </tr>
          <tr>
            <td>Binary Search</td>
            <td>
              <code>O(1)</code>
            </td>
            <td>
              <code>O(log N)</code>
            </td>
            <td>
              <code>O(log N)</code>
            </td>
          </tr>
          <tr>
            <td>Jump Search</td>
            <td>
              <code>O(1)</code>
            </td>
            <td>
              <code>O(√n)</code>
            </td>
            <td>
              <code>O(√n)</code>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

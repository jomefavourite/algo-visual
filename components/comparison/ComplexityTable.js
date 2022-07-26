// import { Styled } from "theme-ui";
import { getColorForComplexity } from "../../util/utility";
import { Algorithms } from "./algorithms";
// import getColorForComplexity from "../util/get-color-for-complexity";
import theme from "../../theme";

function ComplexityTable() {
  const rows = Algorithms.all.map((x) => (
    <tr key={x.name}>
      <td>{x.name}</td>
      <td
        style={{
          color: "heading",
          backgroundColor: (theme) =>
            getColorForComplexity(theme, x.timeComplexityBest),
        }}
      >
        <code>{x.timeComplexityBest.notation}</code>
      </td>
      <td
        style={{
          color: "heading",
          backgroundColor: (theme) =>
            getColorForComplexity(theme, x.timeComplexityAverage),
        }}
      >
        <code>{x.timeComplexityAverage.notation}</code>
      </td>
      <td
        style={{
          color: "heading",
          backgroundColor: (theme) =>
            getColorForComplexity(theme, x.timeComplexityWorst),
        }}
        className={`bg-[${getColorForComplexity(
          theme,
          x.timeComplexityWorst
        )}] `}
      >
        <code>{x.timeComplexityWorst.notation}</code>
      </td>
    </tr>
  ));

  return (
    <table role='table' className='table-normal table w-full'>
      <thead>
        <tr>
          <th className='text-sm'>Name</th>
          <th className='text-sm'>Best</th>
          <th className='text-sm'>Average</th>
          <th className='text-sm'>Worst</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ComplexityTable;

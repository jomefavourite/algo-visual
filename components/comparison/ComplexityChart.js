import React from "react";
import { useMediaQuery } from "react-responsive";
// import { useColorMode, useThemeUI } from "theme-ui";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  Tooltip,
  Loading,
} from "react-jsx-highcharts";
import applyExporting from "highcharts/modules/exporting";
// import darkTheme from "../dark-theme"
import { useDataSetSize } from "./settings";

if (typeof Highcharts === "object") {
  applyExporting(Highcharts);
}

const plotOptions = {
  scatter: {
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "O({point.x}) = {point.y}",
    },
  },
};

const ComplexityChart = ({ title, children }) => {
  // const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({ minDeviceWidth: 740 });
  const yAxisLabels = isDesktop
    ? { rotation: 0, padding: 5, x: -8 }
    : { rotation: -90, padding: 0, x: -3 };
  // const titleStyle = isDesktop ? { fontSize: "14px" } : { fontSize: "12px" };
  const chartMarginRight = isDesktop ? 70 : 0;
  const chartSpacing = isDesktop ? [10, 10, 15, 10] : [10, 5, 15, 5];
  // const [colorMode] = useColorMode()
  // const isDark = colorMode === `dark`
  const [xAxisMax] = useDataSetSize();
  const yAxisMax = xAxisMax ** 2;

  console.log(xAxisMax, "xAxisMax");
  console.log(yAxisMax, "yAxisMax");

  // const setTheme = chart => {
  //   if (isDark) {
  //     const loadingStyle = {
  //       loading: {
  //         style: {
  //           backgroundColor: theme.colors?.chart
  //         }
  //       }
  //     }
  //     chart.update(loadingStyle)
  //     // @todo fix this ugly lifecycle hack
  //     // setTimeout(() => chart.update(darkTheme), 1)
  //   }
  // }

  return (
    <HighchartsChart
      plotOptions={plotOptions}
      // callback={setTheme}
      // key={colorMode}
      // sx={{ backgroundColor: "chart" }}
    >
      <Chart
        marginRight={chartMarginRight}
        spacing={chartSpacing}
        // zoomType='xy'
        backgroundColor='transparent'
      />
      <Title>{title}</Title>
      <Loading>Running analysis...</Loading>
      <Legend />
      <Tooltip />
      <XAxis
        type='logarithmic'
        min={10}
        max={xAxisMax}
        // max={100}
      >
        <XAxis.Title>Elements (n)</XAxis.Title>
      </XAxis>
      <YAxis
        type='logarithmic'
        min={10}
        max={yAxisMax}
        // max={100}
        labels={yAxisLabels}
      >
        <YAxis.Title>Operations (O)</YAxis.Title>
        {children}
      </YAxis>
    </HighchartsChart>
  );
};
export default withHighcharts(ComplexityChart, Highcharts);

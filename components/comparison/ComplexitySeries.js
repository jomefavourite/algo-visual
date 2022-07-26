// import { useThemeUI } from "theme-ui"
import { AreaSeries } from "react-jsx-highcharts";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Complexities } from "./complexities";
import { useDataSetSize } from "./settings";
import theme from "../../theme";
import { getColorForComplexity } from "../../util/utility";

const ComplexitySeries = () => {
  // const { theme } = useThemeUI()
  const isDesktop = useMediaQuery({ minDeviceWidth: 720 });
  const [dataSetSize] = useDataSetSize();
  const plotOptions = {
    lineWidth: 0,
    marker: {
      enabled: false,
    },
    states: {
      hover: {
        lineWidth: 0,
      },
    },
    enableMouseTracking: false,
    showInLegend: false,
    dataLabels: {
      enabled: false,
      crop: false,
      allowOverlap: true,
      overflow: isDesktop ? "allow" : "justify",
      align: isDesktop ? "left" : "center",
      verticalAlign: "middle",
      format: `{series.userOptions.notation}`,
      x: isDesktop ? 0 : 10,
    },
  };
  const xPoints = Array.from({ length: 42 }, (v, i) =>
    Math.min(dataSetSize, 2 ** i / 3)
  );
  const complexitySeries = Complexities.common.map((r) => (
    <AreaSeries
      key={r.name}
      name={r.name}
      color={getColorForComplexity(theme, r)}
      notation={r.notation}
      data={xPoints.map((x) => ({ x, y: r.calculate(x) }))}
      {...plotOptions}
    />
  ));
  complexitySeries.forEach((x) =>
    Object.assign(x.props.data[x.props.data.length - 1], {
      dataLabels: { enabled: true },
    })
  );
  return complexitySeries;
};

// function getColorForComplexity(theme, complexity) {
//   return alpha(theme.colors?.complexities[complexity.rating], 0.6)(theme);
// }

export default ComplexitySeries;

// import { useThemeUI } from "theme-ui"
import { AreaSeries } from "react-jsx-highcharts";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Complexities } from "../../util/complexities";
// import getColorForComplexity from "../util/get-color-for-complexity";
import { useDataSetSize } from "./settings";

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
      x: isDesktop ? 0 : 5,
    },
  };
  const xPoints = Array.from({ length: 42 }, (v, i) =>
    Math.min(dataSetSize, 2 ** i / 3)
  );
  const complexitySeries = Complexities.common.map((r) => (
    <AreaSeries
      key={r.name}
      name={r.name}
      // color={getColorForComplexity(theme, r)}
      // color={[
      //   "#a6f0ff",
      //   "#70d49e",
      //   "#e898a5",
      //   "#007faa",
      //   "#f9db72",
      //   "#f45b5b",
      //   "#1e824c",
      //   "#e7934c",
      //   "#dadfe1",
      //   "#a0618b"
      // ]}
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

export default ComplexitySeries;

import { ScatterSeries, ErrorBarSeries, useChart } from "react-jsx-highcharts";
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import addHighchartsMore from "highcharts/highcharts-more";
import analyzer from "./analyzer";
// import { DataSet } from "../data-sets";
// import Algorithm from "../algorithms/algorithm";
import Stopwatch from "./stopwatch";
import { persist, preanalyzed } from "./preanalyzed";
import {
  PreanalyzedMode,
  StopwatchMode,
  useDataSetSize,
  usePreanalyzedMode,
  useStopwatchMode,
  useWebWorkerMode,
} from "./settings";
if (typeof Highcharts === "object") {
  addHighchartsMore(Highcharts);
}

const keyify = (key, name) => `${key}-${name}`.replace(" ", "-").toLowerCase();

const logarithmics = [
  10, 15, 20, 30, 40, 60, 80, 100, 150, 200, 300, 400, 600, 800, 1000, 1500,
  2000, 3000, 4000, 6000, 8000,
];

const AnalysisSeries = (props) => {
  const chart = useChart();
  const [analysis, setAnalysis] = React.useState([]);
  const [preanalyzedMode] = usePreanalyzedMode();
  const [webWorkerMode] = useWebWorkerMode();
  const [stopwatchMode] = useStopwatchMode();
  const [dataSetSize] = useDataSetSize();
  const sizes = logarithmics.filter((x) => x <= dataSetSize);

  // console.log(webWorkerMode, "webWorkerMode");

  useEffect(() => {
    // @todo this hack is definitely NSFW; actually I should rewrite this whole part
    setTimeout(() => {
      (async function runAnalysis() {
        let data = preanalyzed(props.id);
        if (preanalyzedMode !== PreanalyzedMode.Enabled || !data) {
          console.log("preanalyzedMode", preanalyzedMode);
          const stopwatch = new Stopwatch("Analyzer");
          data = await analyzer(
            props.algorithms,
            props.dataSets,
            props.sizes || sizes,
            props.scatter,
            webWorkerMode
          );
          if (stopwatchMode === StopwatchMode.Analyzer) {
            stopwatch.stop();
          }
          if (preanalyzedMode === PreanalyzedMode.Persist) {
            persist(props.id, data);
          }
        }
        chart.hideLoading();

        // console.log(data, "data");

        setAnalysis(data);
      })();
    }, 1);
  }, []);

  return analysis.reduce((series, current) => {
    const scatterKey = keyify("scatter", current.name);
    const errorKey = keyify("error", current.name);

    let scatterSeries = series.find((s) => s.key === scatterKey);
    let errorSeries = series.find((s) => s.key === errorKey);
    if (scatterSeries === undefined) {
      scatterSeries = (
        <ScatterSeries name={current.name} key={scatterKey} data={[]} />
      );
      errorSeries = (
        <ErrorBarSeries name={current.name} key={errorKey} data={[]} />
      );
      series.push(scatterSeries);
      if (props.showRange) series.push(errorSeries);
    }
    scatterSeries.props.data.push({
      x: current.dataSetSize,
      y: current.actualOperations,
    });
    if (props.showRange && errorSeries)
      errorSeries.props.data.push({
        x: current.dataSetSize,
        low: current.expectedOperationsBest,
        high: current.expectedOperationsWorst,
      }); // @todo find a better solution for this

    return series;
  }, []);
};

export default AnalysisSeries;

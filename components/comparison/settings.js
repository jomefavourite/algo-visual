import { useState } from "react";

function useLocalStorageBackedEnum(key, enumType, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return defaultValue;
      return Number.isNaN(Number(item)) ? item : +item;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, value.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export let PreanalyzedMode;
(function (PreanalyzedMode) {
  PreanalyzedMode["Enabled"] = "enabled";
  PreanalyzedMode["Disabled"] = "disabled";
  PreanalyzedMode["Persist"] = "persist";
})(PreanalyzedMode || (PreanalyzedMode = {}));

export let WebWorkerMode;
(function (WebWorkerMode) {
  WebWorkerMode[(WebWorkerMode["Enabled"] = 0)] = "Enabled";
  WebWorkerMode[(WebWorkerMode["Disabled"] = 99999999999999)] = "Disabled";
  WebWorkerMode[(WebWorkerMode["XLOnly"] = 1000000)] = "XLOnly";
})(WebWorkerMode || (WebWorkerMode = {}));

export let StopwatchMode;
(function (StopwatchMode) {
  StopwatchMode["None"] = "none";
  StopwatchMode["Analyzer"] = "analyzer";
  StopwatchMode["Algorithm"] = "algorithm";
})(StopwatchMode || (StopwatchMode = {}));

export let DataSetSize;
(function (DataSetSize) {
  DataSetSize[(DataSetSize["Small"] = 100)] = "Small";
  DataSetSize[(DataSetSize["Medium"] = 1000)] = "Medium";
  DataSetSize[(DataSetSize["Large"] = 10000)] = "Large";
})(DataSetSize || (DataSetSize = {}));

export const usePreanalyzedMode = () =>
  useLocalStorageBackedEnum(
    "preanalyzed-mode",
    PreanalyzedMode,
    PreanalyzedMode.Enabled
  );
export const useWebWorkerMode = () =>
  useLocalStorageBackedEnum(
    "web-worker-mode",
    WebWorkerMode,
    WebWorkerMode.Disabled
  );
export const useStopwatchMode = () =>
  useLocalStorageBackedEnum(
    "stopwatch-mode",
    StopwatchMode,
    StopwatchMode.None
  );
export const useDataSetSize = () =>
  useLocalStorageBackedEnum("data-set-size", DataSetSize, DataSetSize.Large);

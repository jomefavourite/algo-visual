import React, { useState, useEffect } from "react";
import { Graph } from "../Graph/Graph";
import styles from "./Board.module.css";
import { mapValues } from "lodash";
import { ProgressIndicator } from "@fluentui/react";
import { edgeOptions, algoOptions } from "../../configs/readOnly";
import { optionButtonStyles, sliderOptions } from "./BoardStyles";
import Link from "next/link";
import Nav from "./Nav";

export const Board = () => {
  const [options, setOptions] = useState({
    drawNode: true,
    moveNode: false,
    deleteNode: false,
    reset: false,
    editEdge: false,
    deleteEdge: false,
    selectEdge: false,
  });
  const [nodeSelection, setNodeSelection] = useState({
    isStartNodeSelected: false,
    isEndNodeSelected: false,
  });
  const [selectedEdge, setSelectedEdge] = useState(edgeOptions[0]);
  const [selectedAlgo, setSelectedAlgo] = useState(algoOptions[0]);
  const [isVisualizing, setVisualizingState] = useState(false);
  const [visualizationSpeed, setVisualizationSpeed] = useState(500);
  const [isSelectEge, setIsSelectEdge] = useState(false);

  useEffect(() => {
    if (!isVisualizing) {
      setSelectedAlgo({ key: "select", text: "Select Algorithm" });
      // setNodeSelection({...options})
    }
  }, [isVisualizing]);

  //Activates the desired option from control panel.
  const activateOption = (option) => {
    const updatedOptions = mapValues(options, (_value, key) =>
      key === option ? true : false
    );
    setSelectedEdge({ key: "select", text: "Select Edge" });
    setSelectedAlgo({ key: "select", text: "Select Algorithm" });
    setNodeSelection({
      ...nodeSelection,
      isStartNodeSelected: false,
      isEndNodeSelected: false,
    });
    setOptions(updatedOptions);
    setIsSelectEdge(false);
  };

  //handles the selection of edge options and corresponding toggles for other options in control panel.
  const handleEdgeOptions = (_event, option) => {
    console.log(_event, "event", option, "option");
    const updatedOptions = mapValues(options, () => false);
    setOptions(updatedOptions);
    setSelectedAlgo({ key: "select", text: "Select Algorithm" });
    setSelectedEdge(option);

    setIsSelectEdge(true);
  };

  //handles the selection of algo options and corresponding toggles for other options in control panel.
  const handleAlgoOptions = (_event, option) => {
    setSelectedAlgo(option);
    setSelectedEdge({ key: "select", text: "Select Edge" });
    if (option?.key === "select") {
      const updatedOptions = mapValues(options, () => false);
      setOptions(updatedOptions);
    } else if (option?.data === "traversal") {
      setNodeSelection({ ...nodeSelection, isStartNodeSelected: true });
      const updatedOptions = mapValues(options, () => false);
      setOptions(updatedOptions);
    }

    setIsSelectEdge(false);
  };

  return (
    <>
      <nav className='bg-black py-2'>
        <Nav
          // isPullDownMenuOpen={isPullDownMenuOpen}
          isVisualizing={isVisualizing}
          activateOption={activateOption}
          handleEdgeOptions={handleEdgeOptions}
          handleAlgoOptions={handleAlgoOptions}
          visualizationSpeed={visualizationSpeed}
          setVisualizationSpeed={setVisualizationSpeed}
          options={options}
          isSelectEge={isSelectEge}
          selectedAlgo={selectedAlgo}
        />
      </nav>

      <div className={styles.visualizerProgress}>
        {isVisualizing ? (
          <ProgressIndicator styles={{ itemProgress: { padding: "0" } }} />
        ) : (
          <hr />
        )}
      </div>

      <div className='h-[calc(100vh-90px)] w-screen'>
        <Graph
          options={options}
          selectedAlgo={selectedAlgo}
          selectedEdge={selectedEdge}
          visualizationSpeed={visualizationSpeed}
          setVisualizingState={setVisualizingState}
          isVisualizing={isVisualizing}
          nodeSelection={nodeSelection}
          setNodeSelection={setNodeSelection}
        />
      </div>
    </>
  );
};

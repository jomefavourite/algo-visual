import { Dropdown } from "@fluentui/react";
import Link from "next/link";
import React from "react";
import { algoOptions } from "../../configs/readOnly";
import styles from "./Board.module.css";
import { optionButtonStyles, sliderOptions } from "./BoardStyles";

function Nav({
  isPullDownMenuOpen,
  isVisualizing,
  activateOption,
  handleEdgeOptions,
  handleAlgoOptions,
  visualizationSpeed,
  setVisualizationSpeed,
  options,
  isSelectEge,
  selectedAlgo,
}) {
  return (
    <div
      className='container flex w-full items-center justify-between '
      // style={isPullDownMenuOpen ? { top: "-7%" } : { top: "-125%" }}
    >
      <Link style={{ textDecoration: "none" }} href={"/"}>
        <a>
          <span className='navbar-brand'> {"◀"} </span>
        </a>
      </Link>
      <div className={styles.appIcon}>Graph Traversals</div>
      <div className='flex  flex-wrap gap-3'>
        <button
          className={`${styles.optionButtons} ${
            options.drawNode && styles.selectedButtonOption
          }`}
          onClick={() => activateOption("drawNode")}
          disabled={isVisualizing}
        >
          Draw Node
        </button>
        <button
          className={`${styles.optionButtons} ${
            options.moveNode && styles.selectedButtonOption
          }`}
          onClick={() => activateOption("moveNode")}
          disabled={isVisualizing}
        >
          Move Node
        </button>
        <button
          className={`${styles.optionButtons} ${
            options.deleteNode && styles.selectedButtonOption
          }`}
          onClick={() => activateOption("deleteNode")}
          disabled={isVisualizing}
        >
          Delete Node
        </button>
        <button
          className={`${styles.optionButtons} ${
            isSelectEge && styles.selectedButtonOption
          }`}
          // onClick={() => activateOption("deleteNode")}
          disabled={isVisualizing}
          onClick={(e) =>
            handleEdgeOptions(e, {
              key: "undirected",
              text: "Undirected",
            })
          }
        >
          Select Edge (Undirected)
        </button>
        <button
          className={`${styles.optionButtons} ${
            options.deleteEdge && styles.selectedButtonOption
          }`}
          onClick={() => activateOption("deleteEdge")}
          disabled={isVisualizing}
        >
          Delete Edge
        </button>
        <button
          className={`${styles.optionButtons} ${
            options.reset && styles.selectedButtonOption
          }`}
          onClick={() => activateOption("reset")}
          disabled={isVisualizing}
        >
          Reset
        </button>
      </div>

      <div className={styles.visualizeControls}>
        <Dropdown
          className={`${styles.dropdownWrapper} ${
            selectedAlgo?.key !== "select" && styles.selectedDropdownOption
          }`}
          options={algoOptions}
          styles={optionButtonStyles.algoDropdown}
          placeholder='Select Algorithm'
          selectedKey={selectedAlgo && selectedAlgo.key}
          onChange={handleAlgoOptions}
          disabled={isVisualizing}
        />

        <div>
          <span className='block text-white'>Visual Delay</span>
          <input
            type='range'
            name='Visual Delay'
            id=''
            min={100}
            max={1000}
            step={100}
            value={visualizationSpeed}
            onChange={(e) => setVisualizationSpeed(e.target.value)}
            disabled={isVisualizing}
          />
        </div>
        {/* <Slider
              className={styles.speedSlider}
              label='Visual Delay'
              styles={sliderOptions}
              min={100}
              max={1000}
              step={100}
              value={visualizationSpeed}
              onChange={setVisualizationSpeed}
              disabled={isVisualizing}
            /> */}
      </div>
    </div>
  );
}

export default Nav;

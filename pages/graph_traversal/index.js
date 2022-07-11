import React from "react";
import { initializeIcons } from "@fluentui/react";
import "../../components/GraphTraversal/GraphTraversal.module.css";
import { Board } from "../../components/GraphTraversal/components/Board/Board";
// import { Board } from "./components/Board/Board";

initializeIcons();

function GraphTraversal() {
  return <Board />;
}

export default GraphTraversal;

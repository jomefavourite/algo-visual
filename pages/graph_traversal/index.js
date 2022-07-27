import React from "react";
import { initializeIcons } from "@fluentui/react";
import "../../components/GraphTraversal/GraphTraversal.module.css";
import { Board } from "../../components/GraphTraversal/components/Board/Board";
// import { Board } from "./components/Board/Board";
import Head from "next/head";

initializeIcons();

function GraphTraversal() {
  return (
    <>
      <Head>Graph Traversal </Head>
      <Board />
    </>
  );
}

export default GraphTraversal;

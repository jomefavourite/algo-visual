import React, { useState } from "react";
// import { initializeIcons } from "@fluentui/react";
import "../../components/GraphTraversal/GraphTraversal.module.css";
import { Board } from "../../components/GraphTraversal/components/Board/Board";
// import { Board } from "./components/Board/Board";
import Head from "next/head";
import Modal from "../../components/Modal";
import { Tab } from "@headlessui/react";
import { classNames } from "../../util/utility";

// initializeIcons();

function GraphTraversal() {
  const tabItemHeading = ["Graph Traversal", "Algorithm", "How it works"];
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Head>Graph Traversal</Head>
      <Board />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tabItemHeading={tabItemHeading}
      >
        <TabPanel />
      </Modal>
    </>
  );
}

const TabPanel = () => {
  return (
    <>
      <Tab.Panel
        className={classNames(
          "rounded-xl bg-white p-3",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
        )}
      >
        <div className='space-y-3 text-sm'>
          <p>
            The purpose of a graph traversal (also known as graph search) is to
            locate all nodes that may be reached from a set of root nodes. To
            traverse a graph is to visit every node in the graph exactly once.
          </p>
          <p>
            The two most frequent algorithms for graph traversal are{" "}
            <strong>Breadth-First Search (BFS)</strong> and{" "}
            <strong>Depth First Search (DFS)</strong> .
          </p>
          <div className='space-y-2'>
            <h4 className='font-bold'>Breadth-first search</h4>
            <p>
              Breadth-first search (BFS) is a graph search technique in which
              the search is limited to essentially two operations: (a) visit and
              inspect a graph node; and (b) get access to visit the nodes that
              are adjacent to the currently visited node. The BFS begins at a
              root node and inspects all the neighbouring nodes. Then for each
              of those neighbour nodes, in turn, it inspects their neighbour
              nodes which were unvisited, and so on
            </p>
            <p>
              BFS is implemented as a queue, with the first node visited
              becoming the first node whose successors are visited. The BFS
              algorithm adds a node to a queue that is assumed to be empty at
              first. It is presumed that every entry in the array mark has never
              been visited. If the graph is not connected, BFS must be called on
              a node of each connected component. To avoid placing a node on the
              queue more than once in BFS, we must mark it as visited before
              inserting it into the queue. The algorithm terminates when the
              queue becomes empty
            </p>
          </div>
          <div className='space-y-2'>
            <h4 className='font-bold'>Breadth-first search</h4>
            <p>
              Breadth-first search (BFS) is a graph search technique in which
              the search is limited to essentially two operations: (a) visit and
              inspect a graph node; and (b) get access to visit the nodes that
              are adjacent to the currently visited node. The BFS begins at a
              root node and inspects all the neighbouring nodes. Then for each
              of those neighbour nodes, in turn, it inspects their neighbour
              nodes which were unvisited, and so on
            </p>
            <p>
              BFS is implemented as a queue, with the first node visited
              becoming the first node whose successors are visited. The BFS
              algorithm adds a node to a queue that is assumed to be empty at
              first. It is presumed that every entry in the array mark has never
              been visited. If the graph is not connected, BFS must be called on
              a node of each connected component. To avoid placing a node on the
              queue more than once in BFS, we must mark it as visited before
              inserting it into the queue. The algorithm terminates when the
              queue becomes empty
            </p>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel
        className={classNames(
          "rounded-xl bg-white p-3",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
        )}
      >
        <div className='text-sm'>
          <span className='block'>Breadth-first search (BFS)</span>
          <span className='block'>
            Step 1: Mark v visited, print v, and insert v into the queue. (v:
            head node){" "}
          </span>
          <span className='block'>
            Step 2: Repeat steps 3 to 5, while the queue is not empty.{" "}
          </span>
          <span className='block'>
            Step 3: Delete an item from the queue and assign it to v.{" "}
          </span>
          <span className='block'>
            Step 4: Assign the address of the adjacent list of v to adj. [adj is
            a pointer variable of node type]{" "}
          </span>
          <span className='block'>
            Step 5: Repeat steps a to c, while adj ≠NULL.{" "}
          </span>
          <span className='ml-3 block'>a. Assign node of adj to v. </span>
          <span className='ml-3 block'>
            b. If node v is unvisited, then mark v visited, print v and inserted
            v into the queue.{" "}
          </span>
          <span className='ml-3 block'>
            c. Assign the next node pointer of the adjacent list to adj.
            [adj=adj→next]{" "}
          </span>
          <span className='block'>Step 6: Exit.</span>
        </div>
      </Tab.Panel>
    </>
  );
};

export default GraphTraversal;

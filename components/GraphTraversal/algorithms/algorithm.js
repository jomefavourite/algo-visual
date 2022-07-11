import { Queue } from "../data-structures/Queue";
import { Stack } from "../data-structures/Stack";
import { cloneDeep } from "lodash";

export const bfs = (edges, startNodeId) => {
  const bfsQueue = new Queue();
  const visitedEdges = [];
  const mockEdge = {
    x1: NaN,
    x2: NaN,
    y1: NaN,
    y2: NaN,
    nodeX2: NaN,
    nodeY2: NaN,
    from: "Infinity",
    to: startNodeId.toString(),
    type: "directed",
    weight: NaN,
    isUsedInTraversal: false,
  };
  const visitedSet = new Set();
  bfsQueue.push(mockEdge);
  let newEdges = new Map(edges);
  while (!bfsQueue.isEmpty()) {
    let lastVisitedEdge = bfsQueue.front();
    let nodeId = parseInt(lastVisitedEdge.to);
    bfsQueue.pop();
    if (!visitedSet.has(nodeId)) {
      visitedEdges.push({
        ...mockEdge,
        from: lastVisitedEdge.from,
        to: lastVisitedEdge.to,
      });
      const neighbours = findNeighbours(nodeId, newEdges, visitedSet);
      neighbours?.forEach((id) => {
        bfsQueue.push({
          ...mockEdge,
          from: nodeId.toString(),
          to: id.toString(),
        });
      });
    }
  }
  return visitedEdges;
};

export const dfs = (edges, startNodeId) => {
  let dfsStack = new Stack();
  const mockEdge = {
    x1: NaN,
    x2: NaN,
    y1: NaN,
    y2: NaN,
    nodeX2: NaN,
    nodeY2: NaN,
    from: "Infinity",
    to: startNodeId.toString(),
    type: "directed",
    weight: NaN,
    isUsedInTraversal: false,
  };
  dfsStack.push(mockEdge);
  const visitedSet = new Set();
  const visitedEdges = [];
  let newEdges = new Map(edges);
  while (!dfsStack.isEmpty()) {
    let lastVisitedEdge = dfsStack.top();
    let nodeId = parseInt(lastVisitedEdge.to);
    dfsStack.pop();
    if (!visitedSet.has(parseInt(lastVisitedEdge.to))) {
      visitedEdges.push({
        ...mockEdge,
        from: lastVisitedEdge.from,
        to: lastVisitedEdge.to,
      });

      const neighbours = findNeighbours(nodeId, newEdges, visitedSet);
      neighbours?.forEach((id) => {
        dfsStack.push({
          ...mockEdge,
          from: nodeId.toString(),
          to: id.toString(),
        });
      });
    }
  }
  return visitedEdges;
};

export const dijkstra = (edges, startNodeId, endNodeId) => {
  const mockEdge = {
    x1: NaN,
    x2: NaN,
    y1: NaN,
    y2: NaN,
    nodeX2: NaN,
    nodeY2: NaN,
    from: "Infinity",
    to: startNodeId.toString(),
    type: "directed",
    weight: NaN,
    isUsedInTraversal: false,
  };
  if (startNodeId === endNodeId)
    return { shortestPath: [mockEdge], visitedEdges: [mockEdge] };
  let newEdges = new Map(edges);
  let distance = new Map();
  let prev = new Map();
  let unvisitedSet = new Set();
  let visitedEdges = [];
  distance.set(mockEdge, 0);
  newEdges.forEach((edges, nodeId) => {
    edges?.forEach((edge) => {
      distance.set(edge, Infinity);
    });
    unvisitedSet.add(nodeId);
  });
  let currentEdge = mockEdge;
  let currentNodeId = parseInt(currentEdge.to);
  visitedEdges.push(currentEdge);
  unvisitedSet.delete(currentNodeId);
  while (unvisitedSet.size !== 0) {
    getUnvisitedNeighbours(currentEdge, newEdges, distance, unvisitedSet, prev);
    currentEdge = getSmallestUnvisited(distance, unvisitedSet);
    if (currentEdge === undefined || distance.get(currentEdge) === Infinity) {
      return {
        shortestPath: [],
        visitedEdges: visitedEdges,
      };
    }
    currentNodeId = parseInt(currentEdge.to);
    visitedEdges.push(currentEdge);
    unvisitedSet.delete(currentNodeId);
    if (currentNodeId === endNodeId) {
      return {
        shortestPath: backtrack(prev, startNodeId, endNodeId),
        visitedEdges: visitedEdges,
      };
    }
  }
};
const backtrack = (prev, startNodeId, endNodeId) => {
  const mockEdge = {
    x1: NaN,
    x2: NaN,
    y1: NaN,
    y2: NaN,
    nodeX2: NaN,
    nodeY2: NaN,
    from: "Infinity",
    to: startNodeId.toString(),
    type: "directed",
    weight: NaN,
    isUsedInTraversal: false,
  };
  const visitedOrder = [];
  const visitedEdges = [];
  let currentNodeId = endNodeId;
  visitedOrder.push(currentNodeId);
  while (prev.has(currentNodeId)) {
    currentNodeId = prev.get(currentNodeId);
    visitedOrder.push(currentNodeId);
  }
  visitedOrder.reverse();
  visitedEdges.push(mockEdge);
  for (let i = 0; i < visitedOrder.length - 1; i++) {
    visitedEdges.push({
      ...mockEdge,
      from: visitedOrder[i].toString(),
      to: visitedOrder[i + 1].toString(),
    });
  }
  return visitedEdges;
};
const getSmallestUnvisited = (distance, unvisitedSet) => {
  let smallestUnvisited = [];
  distance.forEach((_value, edge) => {
    if (unvisitedSet.has(parseInt(edge.to))) {
      smallestUnvisited.push(edge);
    }
  });
  return smallestUnvisited.sort((a, b) => distance.get(a) - distance.get(b))[0];
};
const getUnvisitedNeighbours = (
  currentEdge,
  edges,
  distance,
  unvisitedSet,
  prev
) => {
  let currentNodeId = parseInt(currentEdge.to);
  if (edges.get(currentNodeId)) {
    edges.get(currentNodeId)?.forEach((edge) => {
      if (unvisitedSet.has(parseInt(edge.to))) {
        let shouldCompare = true;
        let newDistance = distance.get(currentEdge) + edge.weight;
        distance.forEach((value, d_edge) => {
          if (
            edge.to === d_edge.to &&
            value !== Infinity &&
            value <= newDistance
          ) {
            shouldCompare = false;
          }
        });
        if (shouldCompare && newDistance < distance.get(edge)) {
          distance.set(edge, newDistance);
          prev.set(parseInt(edge.to), currentNodeId);
        }
      }
    });
  }
};

const findNeighbours = (nodeId, edges, visitedSet) => {
  if (!visitedSet.has(nodeId)) {
    visitedSet.add(nodeId);
    return edges.get(nodeId)?.map((edge) => {
      return parseInt(edge.to);
    });
  }
  return [];
};

export const minspantreeprims = (edges, nodes, startNodeId) => {
  let mstSet = new Set();
  let visitedEdges = [];
  let nodeMap = new Map();
  let prev = new Map();
  let isGraphNotEligible = false;
  let newEdges = cloneDeep(edges);
  newEdges.forEach((edges) => {
    isGraphNotEligible =
      isGraphNotEligible || edges?.some((edge) => edge.type === "directed");
  });
  if (isGraphNotEligible) {
    return [];
  }
  edges.forEach((_value, nodeId) => {
    nodeMap.set(nodeId, Infinity);
  });
  nodeMap.set(startNodeId, 0);
  prev.set(startNodeId, Infinity);
  for (let i = 0; i < nodes.length - 1; i++) {
    let minimumNodeId = getFromNotIncludedInMST(newEdges, mstSet, nodeMap);
    mstSet.add(minimumNodeId);
    newEdges.get(minimumNodeId)?.forEach((edge) => {
      const nodeId = parseInt(edge.to);
      if (!mstSet.has(nodeId) && edge.weight < nodeMap.get(nodeId)) {
        nodeMap.set(nodeId, edge.weight);
        prev.set(nodeId, minimumNodeId);
      }
    });
  }

  visitedEdges = getVisitedEdges(prev, visitedEdges, nodes, startNodeId);
  return nodes.length === visitedEdges.length ? visitedEdges : [];
};

const getVisitedEdges = (prev, visitedEdges, nodes, startNodeId) => {
  const mockEdge = {
    x1: NaN,
    x2: NaN,
    y1: NaN,
    y2: NaN,
    nodeX2: NaN,
    nodeY2: NaN,
    from: "Infinity",
    to: startNodeId.toString(),
    type: "directed",
    weight: NaN,
    isUsedInTraversal: false,
  };

  for (let i = 0; i < nodes.length; i++) {
    if (prev.get(nodes[i].id) !== undefined) {
      visitedEdges.push({
        ...mockEdge,
        from: prev.get(nodes[i].id)?.toString(),
        to: nodes[i].id.toString(),
      });
    }
  }
  return visitedEdges;
};
const getFromNotIncludedInMST = (edges, mstSet, nodeMap) => {
  let minimumWeight = Infinity;
  let minimumNodeId;
  edges.forEach((_value, nodeId) => {
    if (!mstSet.has(nodeId) && nodeMap.get(nodeId) < minimumWeight) {
      minimumWeight = nodeMap.get(nodeId);
      minimumNodeId = nodeId;
    }
  });
  return minimumNodeId;
};

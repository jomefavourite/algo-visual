import Head from "next/head";
import Navigation from "../../components/Layout/Navigation";

export default function Comparison() {
  return (
    <>
      <Head>
        <title>Comparison of Graph Traversal Algorithms</title>
      </Head>
      <Navigation
        comparison
        comparisonTitle={"Comparison of Graph Traversal Algorithms"}
      />

      <main className='container'>
        <table className='table-zebra table-compact  w-full border text-left'>
          <tbody>
            <tr>
              <th>S.No.</th>
              <th>Parameters</th>
              <th>BFS</th>
              <th>DFS</th>
            </tr>
            <tr>
              <th>1.</th>
              <th>Stands for</th>
              <th>BFS stands for Breadth First Search.</th>
              <th>DFS stands for Depth First Search.</th>
            </tr>
            <tr>
              <th>2.</th>
              <th>Data Structure</th>
              <th>
                BFS(Breadth First Search) uses Queue data structure for finding
                the shortest path.
              </th>
              <th>DFS(Depth First Search) uses Stack data structure.</th>
            </tr>
            <tr>
              <th>3.</th>
              <th>Definition</th>
              <th>
                BFS is a traversal approach in which we first walk through all
                nodes on the same level before moving on to the next level.
                &nbsp;
              </th>
              <th>
                DFS is also a traversal approach in which the traverse begins at
                the root node and proceeds through the nodes as far as possible
                until we reach the node with no unvisited nearby nodes.
              </th>
            </tr>
            <tr>
              <th>4.</th>
              <th>Technique</th>
              <th>
                BFS can be used to find a single source shortest path in an
                unweighted graph because, in BFS, we reach a vertex with a
                minimum number of edges from a source vertex.&nbsp;
              </th>
              <th>
                In DFS, we might traverse through more edges to reach a
                destination vertex from a source.
              </th>
            </tr>
            <tr>
              <th>5.</th>
              <th>Conceptual Difference</th>
              <th>BFS builds the tree level by level.</th>
              <th>DFS builds the tree sub-tree by sub-tree.</th>
            </tr>
            <tr>
              <th>6.</th>
              <th>Approach used</th>
              <th>
                It works on the concept of FIFO (First In First Out).&nbsp;
              </th>
              <th>It works on the concept of LIFO (Last In First Out).</th>
            </tr>
            <tr>
              <th>7.</th>
              <th>Suitable for</th>
              <th>
                BFS is more suitable for searching vertices closer to the given
                source.
              </th>
              <th>
                DFS is more suitable when there are solutions away from source.
              </th>
            </tr>
            <tr>
              <th>8.</th>
              <th>Suitable for Decision Treestheirwinning</th>
              <th>
                BFS considers all neighbors first and therefore not suitable for
                decision-making trees used in games or puzzles.
              </th>
              <th>
                DFS is more suitable for game or puzzle problems. We make a
                decision, and the then explore all paths through this decision.
                And if this decision leads to win situation, we stop.
              </th>
            </tr>
            <tr>
              <th>9.</th>
              <th>Time Complexity</th>
              <th>
                The Time complexity of BFS is O(V + E) when Adjacency List is
                used and O(V^2) when Adjacency Matrix is used, where V stands
                for vertices and E stands for edges.
              </th>
              <th>
                The Time complexity of DFS is also O(V + E) when Adjacency List
                is used and O(V^2) when Adjacency Matrix is used, where V stands
                for vertices and E stands for edges.
              </th>
            </tr>
            <tr>
              <th>10.</th>
              <th>Visiting of Siblings/ Children</th>
              <th>Here, siblings are visited before the children.</th>
              <th>Here, children are visited before the siblings.</th>
            </tr>
            <tr>
              <th>11.</th>
              <th>Removal of Traversed Nodes</th>
              <th>
                Nodes that are traversed several times are deleted from the
                queue.&nbsp;
              </th>
              <th>
                The visited nodes are added to the stack and then removed when
                there are no more nodes to visit.
              </th>
            </tr>
            <tr>
              <th>12.</th>
              <th>Backtracking</th>
              <th>In BFS there is no concept of backtracking.&nbsp;</th>
              <th>
                DFS algorithm is a recursive algorithm that uses the idea of
                backtracking
              </th>
            </tr>
            <tr>
              <th>13.</th>
              <th>Applications</th>
              <th>
                BFS is used in various applications such as bipartite graphs,
                shortest paths, etc.
              </th>
              <th>
                DFS is used in various applications such as acyclic graphs and
                topological order etc.
              </th>
            </tr>
            <tr>
              <th>14.</th>
              <th>Memory&nbsp;</th>
              <th>BFS requires more memory.&nbsp;</th>
              <th>DFS requires less memory.&nbsp;</th>
            </tr>
            <tr>
              <th>15.</th>
              <th>Optimality</th>
              <th>BFS is optimal for finding the shortest path.</th>
              <th>DFS is not optimal for finding the shortest path.</th>
            </tr>
            <tr>
              <th>16.</th>
              <th>Space complexity</th>
              <th>
                In BFS, the space complexity is more critical as compared to
                time complexity.
              </th>
              <th>
                DFS has lesser space complexity because at a time it needs to
                store only a single path from the root to the leaf node.
              </th>
            </tr>
            <tr>
              <th>17.</th>
              <th>Speed</th>
              <th>BFS is slow as compared to DFS.</th>
              <th>DFS is fast as compared to BFS.</th>
            </tr>
            <tr>
              <th>18.</th>
              <th>When to use?</th>
              <th>
                When the target is close to the source, BFS performs
                better.&nbsp;
              </th>
              <th>
                When the target is far from the source, DFS is preferable.&nbsp;
              </th>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

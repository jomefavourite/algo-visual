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

      <main className='container'></main>
    </>
  );
}

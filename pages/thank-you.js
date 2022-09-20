import React from "react";
import Head from "next/head";

function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>

      <main id='home' className='thank-you container h-screen pt-3'>
        <h1 className='text-center text-2xl font-bold md:text-4xl'>
          Thank You
        </h1>

        <p className='mt-2'>
          Special thanks to{" "}
          <a href='https://github.com/Hussein-miracle'>Hussein Abdullahi</a> for
          making the project a success and also many other Open Source Projects.
        </p>

        <div className='mt-5'>
          <h2 className='center text-2xl font-bold'>
            Credit to Open Source Projects used in this project.
          </h2>

          <div>
            <li>
              <a href='https://github.com/MartinDevillers/omicron/'>
                Omicron (Big O(micron) Visualizer) - Martin Devillers
              </a>
              : helped by giving the idea to represent time complexities using
              charts
            </li>
            <li>
              <a href='https://github.com/ashwin-athappan/algo-visualizer'>
                Algo Visualizer
              </a>{" "}
              by{" "}
              <a href='https://github.com/ashwin-athappan'>Ashwin Athappan</a>{" "}
              which helped in visualizing the Graph Traversal algorithms
            </li>
            <li>
              <a href='https://github.com/ashwin-athappan/Sorting-Visualizer-3D/tree/CODE'>
                Sorting-Visualizer-3D
              </a>{" "}
              by{" "}
              <a href='https://github.com/ashwin-athappan'>Ashwin Athappan</a>{" "}
              helped for the sorting algorithms
            </li>
            <li>Lots more...</li>
          </div>
        </div>
      </main>
    </>
  );
}

export default ThankYou;

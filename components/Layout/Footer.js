import React, { useState, memo } from "react";

import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";

function Footer({
  handleSort,
  playing,
  nextStep,
  previousStep,
  start,
  pauser,
}) {
  const handlePlay = (type) => {
    // handleSort();
    console.log(type);

    if (type === "play") {
      start();
    } else {
      console.log("pause");
      pauser();
    }
  };

  return (
    <footer className='mt-8 bg-black p-4 text-center text-white'>
      <div className='flex justify-center gap-10'>
        <button className='cursor-pointer' onClick={() => previousStep()}>
          <FaStepBackward />
        </button>
        <button
          className='cursor-pointer'
          data-key={playing ? "pause" : "play"}
          onClick={(e) => handlePlay(e.target.dataset.key)}
        >
          {playing ? (
            <FaPause
              data-key='pause'
              className='pointer-events-none text-2xl'
            />
          ) : (
            <FaPlay data-key='play' className='pointer-events-none text-2xl' />
          )}
        </button>
        <button className='cursor-pointer' onClick={() => nextStep()}>
          <FaStepForward />
        </button>
      </div>

      <div className='mt-3'>
        <progress className='h-3 w-64' value='20' max='100'>
          20
        </progress>
      </div>
    </footer>
  );
}

export default memo(Footer);

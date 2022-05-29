import React, { useState, memo } from "react";

import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";

function Footer({ handleSort, playing, nextStep, previousStep, start }) {
  const handlePlay = () => {
    handleSort();
    // start();
  };

  return (
    <footer className='mt-8 bg-black p-4 text-center text-white'>
      <div className='flex justify-center gap-10'>
        <button className='cursor-pointer' onClick={() => previousStep()}>
          <FaStepBackward />
        </button>
        <button className='cursor-pointer' onClick={handlePlay}>
          {playing ? (
            <FaPause className='text-2xl' />
          ) : (
            <FaPlay className='text-2xl' />
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

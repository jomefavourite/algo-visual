import React, { useState, memo } from "react";

import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";

function Footer({ handleSort , playing, nextStep}) {


  const handlePlay = () => {
    handleSort();
  };

  return (
    <footer className='bg-black text-white p-4 text-center mt-8'>
      <div className='flex justify-center gap-10'>
        <button className='cursor-pointer'>
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
        <progress className='w-64 h-3' value='20' max='100'>
          20
        </progress>
      </div>
    </footer>
  );
}

export default memo(Footer);

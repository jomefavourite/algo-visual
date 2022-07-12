import React, { useState, memo } from "react";

import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";
import { toast } from "react-hot-toast";

function Footer({
  playing,
  nextStep,
  previousStep,
  start,
  pauser,
  speedControl,
  setSpeedControl,
  colorSteps,
  type,
}) {
  const handlePlay = (btnClick) => {
    // handleSort();
    console.log(btnClick);
    console.log(colorSteps);

    if (btnClick === "play") {
      type === "sorting"
        ? start()
        : colorSteps !== undefined && colorSteps?.length > 2
        ? start()
        : toast("Please, enter a search key");
    } else {
      console.log("pause");
      pauser();
    }
  };

  const handleRange = (range) => {
    const speed = Number(range);
    switch (speed) {
      case 0:
        setSpeedControl({
          delay: 600,
          speed,
        });
        break;
      case 25:
        setSpeedControl({
          delay: 550,
          speed,
        });
        break;
      case 50:
        setSpeedControl({
          delay: 500,
          speed,
        });
        break;
      case 75:
        setSpeedControl({
          delay: 300,
          speed,
        });
        break;
      case 100:
        setSpeedControl({
          delay: 200,
          speed,
        });
        break;
    }
  };

  return (
    <footer className='mt-8 bg-[#060708] p-4 text-center text-white'>
      <div className='container grid grid-cols-[200px,1fr,200px]'>
        <input
          type='range'
          min='0'
          max='100'
          value={speedControl.speed}
          // class='range'
          step='25'
          onChange={(e) => handleRange(e.target.value)}
        />

        <div>
          <div className='flex justify-center gap-10'>
            <button
              title='Previous Step'
              className='cursor-pointer'
              onClick={() => previousStep()}
              aria-label='backward'
            >
              <FaStepBackward aria-hidden='true' />
            </button>
            <button
              title='Play/Pause'
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
                <FaPlay
                  data-key='play'
                  className='pointer-events-none text-2xl'
                />
              )}
            </button>
            <button
              title='Next Step'
              className='cursor-pointer'
              onClick={() => nextStep()}
              aria-label='forward'
            >
              <FaStepForward />
            </button>
          </div>

          <div className='mt-3'>
            <progress className='h-3 w-64' value='20' max='100'>
              20
            </progress>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);

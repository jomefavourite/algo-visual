import React from "react";

function View2() {
  return (
    <>
      <svg
        preserveAspectRatio='xMaxYMid meet'
        viewBox='-40 0 680 300'
        className='max-w-[1000px] mx-auto'
      >
        <g transform='translate(0,100)'>
          <rect width='50' height='50' fill='white' stroke='black' />
          <text dy='.35em' x='25' y='25'>
            20
          </text>
        </g>
        <g transform='translate(50,100)'>
          <rect width='50' height='50' fill='white' stroke='black' />
          <text dy='.35em' x='25' y='25'>
            20
          </text>
        </g>
        <g transform='translate(100,100)'>
          <rect width='50' height='50' fill='white' stroke='black' />
          <text dy='.35em' x='25' y='25'>
            20
          </text>
        </g>
        <g transform='translate(0,150)'>
          <text dy='.35em' x='25' y='25'>
            0
          </text>
          <text dy='.35em' x='75' y='25'>
            1
          </text>
        </g>
        <circle
          cx='24'
          cy='71'
          r='16.5'
          fill='none'
          stroke='black'
          transform='translate(0,105)'
        />
      </svg>
    </>
  );
}

export default View2;

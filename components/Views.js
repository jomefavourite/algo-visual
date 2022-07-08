import React from "react";
import Bar from "./Bar";
import BoxView from "./BoxView";
import Loader from "./Loader";

function Views({ data, view, colorKey, binary, indexStep, currentStep }) {
  // console.log(indexStep, "indexStep--views");
  return (
    <div className='mt-20 grid min-h-[320px] place-content-center'>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <>
          {view === "chartView" && (
            <div className='flex h-[300px] items-end justify-center gap-3 px-3'>
              {data.map((item, index) => (
                <Bar key={index} item={item} color={colorKey[index]} />
              ))}
            </div>
          )}

          {view === "boxView" && (
            <>
              <div className='flex justify-center'>
                {data.map((item, index) => (
                  <BoxView key={index} item={item} color={colorKey[index]} />
                ))}
              </div>

              <div className='flex w-full justify-between'>
                {binary &&
                  indexStep[currentStep]?.map((item, ind) => (
                    <div
                      key={ind}
                      className='mx-4 flex aspect-square w-[clamp(1rem,10vw,3rem)] items-center justify-center rounded-full border-2 text-center'
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Views;

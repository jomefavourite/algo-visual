import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-hot-toast";

export default function GeneratorController({
  type,
  generateRandom,
  handleInputChange,
  inputValue,
  handleGenerateRandom,
  handleSubmit,
  setInputValue,
}) {
  const [isClicked, setIsClicked] = React.useState(true);

  return (
    <>
      <div className='relative flex'>
        <button
          aria-hidden='true'
          aria-label='generation controller'
          className='mr-2 h-[50px] w-fit rounded-br-md rounded-tr-md bg-[#00000075] p-3'
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? (
            <IoIosArrowForward className='text-white' />
          ) : (
            <IoIosArrowBack className='text-white' />
          )}
        </button>

        {isClicked && (
          <div className={`absolute left-[50px] `}>
            {type === "searching" && (
              <div className='w-fit rounded-lg border bg-white p-3'>
                <button
                  className='btn h-[2rem] min-h-[2rem] normal-case'
                  onClick={generateRandom}
                >
                  Generate Random
                </button>

                <form className='form-control w-[200px]'>
                  <label className='label'>
                    <span className='label-text'>
                      Search for a Number above
                    </span>
                  </label>
                  <label className='input-group input-group-vertical rounded-[9px] border-2  focus-within:ring-2 focus-within:ring-blue-400'>
                    <span className='py-1 text-sm'>Search Key</span>
                    <input
                      type='number'
                      value={inputValue}
                      title='Search Key'
                      placeholder='12'
                      className=' appearance-none bg-[#00000025] p-3 text-black outline-none placeholder:text-[#0000007e]'
                      onChange={(event) => {
                        event.preventDefault();
                        handleInputChange(event);
                      }}
                    />
                  </label>
                </form>
              </div>
            )}
            {type === "sorting" && (
              <div className='w-fit space-y-3 rounded-lg border bg-white p-3'>
                <button
                  className='btn h-[2rem] min-h-[2rem] normal-case'
                  onClick={() => handleGenerateRandom()}
                >
                  Generate Random
                </button>

                <form
                  className='form-control w-[200px]'
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <label className='input-group input-group-vertical rounded-[9px] border-2  focus-within:ring-2 focus-within:ring-blue-400'>
                    <span className='py-1 text-sm'>Enter data sets</span>
                    <input
                      type='text'
                      value={inputValue}
                      placeholder='12,20,33,45,20'
                      className=' appearance-none bg-[#00000025] p-3 text-black outline-none placeholder:text-[#0000007e]'
                      onChange={(event) => {
                        setInputValue(event.target.value);
                      }}
                      onInput={(event) => {
                        let clean = event.target.value
                          .replace(/[^0-9,]/g, "")
                          .replace(/,{2,}/, ",");

                        if (event.target.value.split(",").length > 10) {
                          toast.error("Please enter a maximum of 10 values");
                        }
                        if (clean !== event.target.value)
                          event.target.value = clean;
                      }}
                    />
                  </label>

                  <button className='btn mt-2 normal-case'>Set inputs</button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

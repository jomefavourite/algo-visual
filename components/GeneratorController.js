import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
          className='mr-2 h-[100px] w-fit rounded-br-md rounded-tr-md bg-[#00000075] p-3'
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
              <div className='w-fit rounded-lg border p-3'>
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
                  <label className='input-group input-group-vertical'>
                    <span className='py-1 text-sm'>Search Key</span>
                    <input
                      type='number'
                      value={inputValue}
                      title='Search Key'
                      placeholder='12'
                      className='appearance-none bg-[#00000062] p-3 text-black placeholder:text-[#0000007e]'
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
              <div className='w-fit rounded-lg border p-3'>
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
                  <label className='input-group input-group-vertical'>
                    <span className='py-1 text-sm'>Enter data sets</span>
                    <input
                      type='text'
                      value={inputValue}
                      placeholder='12,20,33,45,20'
                      className='appearance-none bg-[#00000062] p-3 text-black placeholder:text-[#0000007e]'
                      pattern='^[-+]?(\d{1,3})(,?(?1))*$'
                      onChange={(event) => {
                        setInputValue(event.target.value);
                      }}
                    />
                  </label>

                  <button className='btn'>Set inputs</button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

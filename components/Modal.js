import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  tabItemHeading,
  children,
  sorting,
}) {
  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  const handleInput = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      localStorage.setItem("isChecked", isChecked);
    }
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsModalOpen(true)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 min-h-[400px]  overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='max-h-[600px] w-full max-w-md transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='w-full max-w-md px-2 sm:px-0'>
                    <Tab.Group defaultIndex={0}>
                      <Tab.List className='flex space-x-1 rounded-xl bg-black/10 p-1'>
                        {tabItemHeading.map((item, index) => (
                          <Tab
                            key={index}
                            className={({ selected }) =>
                              classNames(
                                "text- blue-700 w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                selected
                                  ? "bg-white shadow"
                                  : "text-black hover:bg-white/[0.12] hover:text-white"
                              )
                            }
                          >
                            {item}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className='mt-2 '>
                        {children}
                        <Tab.Panel
                          className={classNames(
                            "rounded-xl bg-white p-3",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                          )}
                        >
                          <div className='space-y-3 text-sm'>
                            <div className='space-y-3'>
                              {[
                                {
                                  text: "Current element being searched",
                                  color: "#ff304fff",
                                },
                                {
                                  text: "Search key found",
                                  color: "#83e85a80",
                                },
                                {
                                  text: "Search key not found",
                                  color: "#eb7b1380",
                                },
                              ].map((item, index) => (
                                <p
                                  className='flex items-center gap-2'
                                  key={index}
                                >
                                  <span
                                    aria-hidden='true'
                                    aria-label='Color type'
                                    style={{
                                      backgroundColor: `${item.color}`,
                                    }}
                                    className={`block h-5 w-5 rounded-full `}
                                  ></span>{" "}
                                  {item.text}
                                </p>
                              ))}
                            </div>

                            <hr />

                            <div className='space-y-3 text-sm'>
                              <p className='flex items-center gap-2'>
                                <FaPlay className='text-2xl' /> Play
                                Visualization
                              </p>
                              <p className='flex items-center gap-2'>
                                <FaStepForward className='text-2xl' /> Move
                                forwards
                              </p>
                              <p className='flex items-center gap-2'>
                                <FaStepBackward className='text-2xl' /> Move
                                backwards
                              </p>
                            </div>

                            <hr />

                            <div>
                              <div className='flex items-center gap-3'>
                                <button className='btn disabled h-[2rem] min-h-[2rem] normal-case'>
                                  Generate Random
                                </button>
                                <p>
                                  Click on the button to generate random data
                                  set
                                </p>
                              </div>
                              <div className='mt-3 flex items-center gap-3'>
                                {!sorting ? (
                                  <>
                                    <form className='form-control pointer-events-none w-[148px]'>
                                      <label className='input-group input-group-vertical rounded-[9px] border-2  focus-within:ring-2 focus-within:ring-blue-400'>
                                        <span className='py-1 text-sm'>
                                          Search Key
                                        </span>
                                        <input
                                          type='number'
                                          title='Search Key'
                                          placeholder='12'
                                          className=' appearance-none bg-[#00000025] p-3 text-black outline-none placeholder:text-[#0000007e]'
                                        />
                                      </label>
                                    </form>
                                    <p>
                                      Enter a search key to search for the key
                                      in the data set
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <form className='form-control pointer-events-none w-[148px]'>
                                      <label className='input-group input-group-vertical rounded-[9px] border-2  focus-within:ring-2 focus-within:ring-blue-400'>
                                        <span className='py-1 text-sm'>
                                          Enter data sets
                                        </span>
                                        <input
                                          type='text'
                                          placeholder='12,20,33,45,20'
                                          className=' appearance-none bg-[#00000025] p-3 text-black outline-none placeholder:text-[#0000007e]'
                                        />
                                      </label>
                                    </form>
                                    <p>
                                      Enter your dataset with the format of
                                      12,20,33,45,20
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                        {/* {Object.values(categories).map((posts, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                            )}
                          >
                            <ul>
                              {posts.map((post) => (
                                <li
                                  key={post.id}
                                  className='relative rounded-md p-3 hover:bg-gray-100'
                                >
                                  <h3 className='text-sm font-medium leading-5'>
                                    {post.title}
                                  </h3>

                                  <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                                    <li>{post.date}</li>
                                    <li>&middot;</li>
                                    <li>{post.commentCount} comments</li>
                                    <li>&middot;</li>
                                    <li>{post.shareCount} shares</li>
                                  </ul>

                                  <a
                                    href='#'
                                    className={classNames(
                                      "absolute inset-0 rounded-md",
                                      "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                                    )}
                                  />
                                </li>
                              ))}
                            </ul>
                          </Tab.Panel>
                        ))} */}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                  <div className='absolute -top-4 -right-2 '>
                    <button
                      aria-hidden='true'
                      aria-label='close modal'
                      className='h-10 w-10 rounded-full bg-black p-3'
                      onClick={closeModal}
                    >
                      <MdClose className='text-white' />
                    </button>
                  </div>

                  <div className='p-3'>
                    <label htmlFor='show' className='text-sm'>
                      <input
                        type='checkbox'
                        name='show'
                        id='show'
                        onChange={handleInput}
                      />{" "}
                      Don't show again
                    </label>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

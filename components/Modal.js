import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { FaPlay, FaStepForward, FaStepBackward, FaPause } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Modal({ isModalOpen, setIsModalOpen }) {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const tabItems = ["Intro to Linear Search", "How it works"];

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
                <Dialog.Panel className='w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='w-full max-w-md px-2 sm:px-0'>
                    <Tab.Group defaultIndex={0}>
                      <Tab.List className='flex space-x-1 rounded-xl bg-black/10 p-1'>
                        {tabItems.map((item, index) => (
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
                        {/* {Object.keys(categories).map((category) => (
                          <Tab
                            key={category}
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
                            {category}
                          </Tab>
                        ))} */}
                      </Tab.List>
                      <Tab.Panels className='mt-2'>
                        <Tab.Panel
                          className={classNames(
                            "rounded-xl bg-white p-3",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                          )}
                        >
                          <div>hjjkks</div>
                        </Tab.Panel>
                        <Tab.Panel
                          className={classNames(
                            "rounded-xl bg-white p-3",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                          )}
                        >
                          <div className='space-y-3'>
                            <div className='space-y-3'>
                              {[
                                {
                                  text: "Current element being searched",
                                  color: "rgba(255,48,79,1)",
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
                                    className={`inline-block h-5 w-5 rounded-full bg-[${item.color}]`}
                                  ></span>{" "}
                                  {item.text}
                                </p>
                              ))}
                            </div>

                            <hr />

                            <div className='space-y-3'>
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

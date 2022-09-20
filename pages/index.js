import Head from "next/head";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Home() {
  const options = [
    {
      name: "Searching Algorithm",
      image: ["/images/searching.png", "/images/searching.gif"],
      types: [
        {
          name: "Linear Search",
          link: "/searching/linear",
          tag: "linear",
        },
        {
          name: "Binary Search",
          link: "/searching/binary",
          tag: "binary",
        },
        {
          name: "Jump Search",
          link: "/searching/jump",
          tag: "jump",
        },
        {
          name: "Comparison Page",
          link: "/searching/comparison",
          tag: "comparison",
        },
      ],
    },
    {
      name: "Sorting Algorithm",
      image: ["/images/sorting.png", "/images/sorting.gif"],
      types: [
        {
          name: "Bubble Sort",
          link: "/sorting/bubble",
          tag: "bubble",
        },
        {
          name: "Selection Sort",
          link: "/sorting/selection",
          tag: "selection",
        },
        // {
        //   name: "Insertion Sort",
        //   link: "/sorting/insertion",
        //   tag: "insertion",
        // },
        {
          name: "Comparison Page",
          link: "/sorting/comparison",
          tag: "comparison",
        },
      ],
    },
    {
      name: "Graph Traversal Algorithm",
      image: ["/images/graph-traversal.png", "/images/graph-traversal.gif"],
      types: [
        {
          name: "Breadth First Search",
          link: "/graph_traversal/",
          tag: "BFS",
        },
        {
          name: "Depth First Search",
          link: "/graph_traversal/",
          tag: "DFS",
        },
        {
          name: "Comparison Page",
          link: "/graph_traversal/comparison",
          tag: "comparison",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Algorithm Visualization</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main id='home' className='md:h-[calc(100vh-128px)]'>
        <div className='container'>
          <h1 className='pt-8 text-center text-3xl'>The AlgoVisual Platform</h1>

          <div className='mt-8 flex flex-col items-center justify-center gap-5 md:flex-row'>
            {options.map((item, id) => (
              <div
                key={id}
                className='group  w-[300px] overflow-hidden rounded-md bg-[#fff] shadow-lg'
              >
                <img
                  src={item.image[0]}
                  alt=''
                  className='block group-hover:hidden'
                />
                <img
                  src={item.image[1]}
                  alt=''
                  className='hidden group-hover:block'
                />

                <div className='bg-white py-3 px-4'>
                  <h2 className='text mb-2 font-semibold'>{item.name}</h2>
                  <div className='flex flex-wrap gap-2'>
                    {item.types.map((type, i) => (
                      <Link href={type.link} key={i}>
                        <a className='rounded-md bg-[#000] px-2 py-[2px] text-sm text-white shadow-md transition-colors ease-in hover:bg-[#00000083]'>
                          {type.tag}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className='p-3'>
        <div className='container  border-t'>
          <div className=' mt-5 w-full rounded-md bg-base-100 p-4 shadow md:w-96'>
            Thanks to all{" "}
            <Link href='/thank-you'>
              <a className='text-[#3e59a5e5]'>contributors and OSS</a>
            </Link>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <p>
                © {new Date().getFullYear()}{" "}
                <a
                  href='https://github.com/jomefavourite'
                  className='text-[#535353] hover:text-black'
                >
                  Favourite Jome.
                </a>{" "}
                All rights reserved.
              </p>
            </div>

            <div className='flex space-x-3'>
              <a
                href='https://github.com/jomefavourite'
                className='transform transition-transform ease-out hover:scale-110'
              >
                <FaGithub size='1.4em' />
              </a>
              <a
                href='https://twitter.com/favouritejome1'
                className='transform transition-transform ease-out hover:scale-110'
              >
                <AiFillTwitterCircle size='1.4em' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

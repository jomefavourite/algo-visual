import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Navigation({
  options,
  pageTitle,
  comparison,
  comparisonTitle,
}) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <nav className='relative bg-[#000] py-4 px-4'>
        <div className='container grid w-full grid-cols-2 items-center text-white md:grid-cols-[200px,1fr,130px]  '>
          {!comparison && (
            <>
              <h2 className='w-fit text-lg text-white md:text-xl'>
                {pageTitle}
              </h2>

              <ul className='hidden w-full space-x-4 md:flex '>
                {[...options.slice(0, options.length - 2)].map((option, id) => (
                  <li key={id}>
                    <Link href={`${option.href}`}>
                      <a
                        className={`${
                          option.active ? "text-white" : "text-[#ffffffbe]"
                        }`}
                      >
                        {option.value}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href={`${options[options.length - 1]?.href}`}>
                <a
                  className={`${
                    options[options.length - 1]?.active
                      ? "text-white"
                      : "text-[#ffffffbe]"
                  } hidden md:block`}
                >
                  {options[options.length - 1]?.value}
                </a>
              </Link>

              <button
                className='btn ml-auto w-fit md:hidden'
                onClick={() => setIsClicked(!isClicked)}
              >
                Menu
              </button>
            </>
          )}

          {comparison && (
            <>
              <button
                onClick={() => router.back()}
                className='mr-4 flex items-center gap-1'
              >
                <IoMdArrowRoundBack />
                Back
              </button>

              <h3>{comparisonTitle}</h3>
            </>
          )}
        </div>

        {/* Mobile */}
        {!comparison && isClicked && (
          <div className='pointer-events-none absolute left-0 z-10 h-screen w-full md:hidden'>
            <div className='bg-black py-5 '>
              <ul className='flex w-full flex-col items-center space-y-4'>
                {options.map((option, id) => (
                  <li key={id}>
                    <Link href={`${option.href}`}>
                      <a
                        className={`${
                          option.active ? "text-white" : "text-[#ffffffbe]"
                        }`}
                      >
                        {option.value}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='pointer-events-auto top-0 h-full w-full bg-[#0000004d]'></div>
          </div>
        )}
      </nav>
    </>
  );
}

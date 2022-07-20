import Link from "next/link";
import React from "react";

export default function Navigation({
  options,
  pageTitle,
  comparison,
  comparisonTitle,
}) {
  return (
    <>
      <nav className=' bg-[#000]'>
        <div className='container flex w-full items-center p-3 text-white'>
          {!comparison && (
            <>
              <h2 className='text-white'>{pageTitle}</h2>

              <ul className='flex w-full space-x-4'>
                {[...options.slice(1)].map((option, id) => (
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

              <Link href={`${options[0]?.href}`}>
                <a
                  className={`${
                    options[0]?.active ? "text-white" : "text-[#ffffffbe]"
                  }`}
                >
                  {options[0]?.value}
                </a>
              </Link>
            </>
          )}
          {comparison && (
            <>
              <button className='mr-4'>Back</button>
              <h3>{comparisonTitle}</h3>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import React from "react";

export default function Navigation({ options, pageTitle }) {
  return (
    <nav className=' bg-[#000] '>
      <div className='container flex w-full items-center p-3 text-white'>
        <h2 className='text-white'>{pageTitle}</h2>

        <ul className='flex w-full space-x-4'>
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

      {/* <div>Comparison</div> */}
    </nav>
  );
}

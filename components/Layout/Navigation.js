import Link from "next/link";
import React from "react";

export default function Navigation({ options, pageTitle }) {
  return (
    <nav className='bg-black p-3 text-white'>
      <h2 className='text-white'>{pageTitle}</h2>

      <ul className='flex space-x-4 overflow-auto w-full'>
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

      {/* <div>Comparison</div> */}
    </nav>
  );
}

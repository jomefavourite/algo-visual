import Link from "next/link";
import React from "react";

export default function Navigation({ options }) {
  return (
    <nav className='bg-black p-3'>
      <ul className='flex space-x-4'>
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
    </nav>
  );
}

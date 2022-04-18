import Link from "next/link";
import React from "react";

export default function Navigation({ options }) {
  return (
    <nav className='bg-black p-3'>
      {options.map((option, id) => (
        <Link key={id} href={`${option.href}`}>
          <a className='text-white'>{option.value}</a>
        </Link>
      ))}
    </nav>
  );
}

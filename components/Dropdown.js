import { useState } from "react";

export default function Dropdown({ view, setView }) {
  const handleChange = (e) => {
    setView(e.target.value);
  };

  return (
    <div className='flex justify-end'>
      <select
        className='select select-bordered'
        name='options'
        onChange={handleChange}
      >
        <option value='chartView'>Chart View</option>
        <option value='boxView'>Box View</option>
      </select>
    </div>
  );
}

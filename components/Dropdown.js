import { useState } from "react";

export default function Dropdown({ view, setView }) {
  const handleChange = (e) => {
    setView(e.target.value);
  };

  return (
    <>
      <select name='options' onChange={handleChange} className='border'>
        <option value='chartView'>Chart View</option>
        <option value='boxView'>Box View</option>
      </select>
    </>
  );
}

import { useState } from "react";

export default function Dropdown() {
  const [options, setOptions] = useState("");

  const handleChange = () => {};

  return (
    <>
      <select name='options' onChange={handleChange} className='border'>
        <option value='bar view'>Chart View</option>
        <option value='bar view'>Box View</option>
      </select>
    </>
  );
}

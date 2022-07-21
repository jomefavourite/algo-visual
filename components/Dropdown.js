import { RiQuestionLine } from "react-icons/ri";

function Dropdown({ view, setView, isModalOpen, setIsModalOpen }) {
  const handleChange = (e) => {
    setView(e.target.value);
  };

  return (
    <>
      <div className='ml-auto mt-5 flex w-fit items-center justify-end gap-5 md:flex-col'>
        <button
          className='ml-auto block md:order-2'
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <RiQuestionLine className='text-2xl' />
        </button>

        <select
          className='select select-bordered'
          name='options'
          onChange={handleChange}
        >
          <option value='chartView'>Chart View</option>
          <option value='boxView'>Box View</option>
        </select>
      </div>
    </>
  );
}

export default Dropdown;

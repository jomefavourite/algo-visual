import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import View2 from "../../components/LinearSearch/View2";
import { generateChartData, LinearSearch } from "../../util/search/linear";
import { randomIntFromInterval } from "../../util/utility";

export default function Linear() {
  const [data, setData] = useState([
    {
      textValue: "26",
      translateX: "0",
      translateY: "100",
      rectWidth: "50",
      rectHeight: "50",
      textX: "25",
    },
    {
      textValue: "12",
      translateX: "50",
      translateY: "100",
      rectWidth: "50",
      rectHeight: "50",
      textX: "75",
    },
    {
      textValue: "20",
      translateX: "100",
      translateY: "100",
      rectWidth: "50",
      rectHeight: "50",
      textX: "125",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateRandom();
  }, []);

  const handleClick = (inputValue) => {
    const searchIndex = LinearSearch(data, inputValue);

    console.log(searchIndex);
  };

  const generateRandom = () => {
    const randomArr = Array.from({ length: randomIntFromInterval(8, 12) }, () =>
      Math.floor(Math.random() * 40)
    );

    const noDuplicateArray = Array.from(new Set(randomArr));

    const newChartData = generateChartData(noDuplicateArray);

    setData(newChartData);
  };

  return (
    <>
      <Head>
        <title>Linear Search</title>
      </Head>

      <svg
        preserveAspectRatio='xMaxYMid meet'
        viewBox='-40 0 680 300'
        className='max-w-[1000px] mx-auto'
      >
        {data.map((item, index) => (
          <g
            key={index}
            transform={`translate(${item.translateX},${item.translateY})`}
          >
            <rect width='50' height='50' fill='white' stroke='black' />
            <text dy='.35em' x='25' y='25'>
              {item.textValue}
            </text>
          </g>
        ))}
        <g transform='translate(-52,150)'>
          {data.map((item, index) => (
            <text key={index} dy='.35em' x={`${item.textX}`} y='25'>
              {index}
            </text>
          ))}
        </g>

        <circle
          id='linear-circle'
          cx='24'
          cy='71'
          r='16.5'
          fill='none'
          stroke='black'
          transform='translate(0,105)'
        />
      </svg>

      {/* <View2 /> */}

      <div>
        <p>Search for a Number above</p>

        <input
          type='number'
          value={inputValue}
          placeholder='12'
          className='bg-black text-white'
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button onClick={() => handleClick(inputValue)}>Search</button>
      </div>

      <div>
        <h3>Pseudo Code</h3>

        <code></code>
      </div>
    </>
  );
}

Linear.getLayout = function getLayout(page) {
  const options = [
    {
      value: "Home",
      href: "/",
    },
    {
      value: "Linear Search",
      href: "/searching/linear",
    },
  ];

  return <Layout options={options}>{page}</Layout>;
};

import Head from "next/head";
import Link from "next/link";
// import {withRedux} from "."
export default function Home() {
  return (
    <>
      <Head>
        <title>Algorithm Visualization</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className=''>
        <h1 className='text-3xl'>Algorithm Visualization</h1>
        <div>
          <p>
            <strong>Searching Algorithm:</strong>
          </p>
          <ul>
            <li>
              <Link href='/searching/linear'>
                <a className='text-blue-600'>Linear Search</a>
              </Link>
            </li>
            <li>
              <Link href='/searching/binary'>
                <a className='text-blue-600'>Binary Search</a>
              </Link>
            </li>
            <li>
              <Link href='/searching/jump'>
                <a className='text-blue-600'>Jump Search</a>
              </Link>
            </li>
          </ul>
          <p>
            <strong>Sorting Algorithm</strong>
          </p>
          <ul>
            <li>
              <Link href='/sorting/bubble'>
                <a className='text-blue-600'>Bubble Sort</a>
              </Link>
            </li>
            <li>
              <Link href='/sorting/selection'>
                <a className='text-blue-600'>Selection Sort</a>
              </Link>
            </li>
            <li>
              <Link href='/sorting/insertion'>
                <a className='text-blue-600'>Insertion Sort</a>
              </Link>
            </li>
          </ul>

          <p>
            <strong>Graph Traversal Algoirthms</strong>
          </p>
          <ul>
            <li>- Breadth First Search</li>
            <li>- Depth First Search</li>
          </ul>
        </div>
      </div>
    </>
  );
}

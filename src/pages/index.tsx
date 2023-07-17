import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  

  function counterTime() {
    console.log("counter", 1);
  }

  return (
    <main className="">
      <h1 className="uppercase text-4xl text-center font-extrabold pb-20">Start Counter</h1>
      <form onSubmit={counterTime} className="flex justify-center rounded-md py-10 bg-gradient-to-br from-gray-800 via-neutral-600 to-slate-900 max-w-sm m-auto shadow-md shadow-gray-300">
        <div>
          <h1 className="text-xl uppercase font-semibold py-5">Set the counter here</h1>
          <label>Counter</label>
          <br></br>
          <input
            type="number"
            placeholder="set the counter"
            className="border-none rounded-lg px-2 py-1"
          />
        </div>
      </form>
    </main>
  );
}

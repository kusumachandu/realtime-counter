import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [value, setValue] = useState<any>(0);

  
  function counterTime() {
    console.log("counter", 1);
  }
  
  function handleChange(e: any) {
    setValue(e.target.value)
  }
  
  useEffect(() => {
    setTimeout(() => {
      if(value > 0) {
        setValue(value -1);
      }
    }, 1000)
  }, [value])

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
            className="border-none rounded-lg px-2 py-1 text-black"
            onChange={handleChange}
          />
        </div>
      </form>
      <section className="py-20">
        <div className="w-40 h-20 m-auto bg-slate-700 rounded-lg">
          <p className={`text-center text-7xl flex items-center justify-center ${value === 0 ? 'text-red-400' : 'text-slate-200'}`}>{value}</p>
        </div>
      </section>
    </main>
  );
}

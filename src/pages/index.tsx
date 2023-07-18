import { useState } from "react";
import Counter from "@/components/Counter";

export default function Home() {

  const [value, setValue] = useState<any>(0);
  
  function handleChange(e: any) {
    setValue(e.target.value)
  }

  return (
    <main className="">
      <h1 className="uppercase text-4xl text-center font-extrabold pb-20">Start Counter</h1>
      <form className="flex justify-center rounded-md py-10 bg-gradient-to-br from-gray-800 via-neutral-600 to-slate-900 max-w-sm m-auto shadow-md shadow-gray-300">
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
          <Counter value={value} setValue={setValue} />
        </div>
      </section>
    </main>
  );
}

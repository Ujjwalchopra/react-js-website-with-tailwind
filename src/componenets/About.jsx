import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full my-32">
      <div className='max-w-[1240px] mx-auto'>
        <div className="text-center py-2">
          <h className="font-bold text-5xl py-2 my-5">
            Trusted by developers across the world
          </h>
          <p className="text-2xl py-2">
            There are many variations of passages of available, but
            the majority have suffered alteration in some form, by injected
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 items-center">
          <div className="px-3 py-4 border shadow-xl text-center">
            <p className="text-5xl font-bold text-indigo-500 ">100%</p>
            <p className="text-slate-500 text-2xl">Completion</p>
          </div>
          <div className="px-3 py-4 border shadow-xl text-center">
            <p className="text-5xl font-bold text-indigo-500 ">24/7</p>
            <p className="text-slate-500 text-2xl">delivery</p>
          </div>
          <div className="px-3 py-4 border shadow-xl text-center ">
            <p className="text-5xl font-bold text-indigo-500 ">100k</p>
            <p className="text-slate-500 text-2xl">transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
